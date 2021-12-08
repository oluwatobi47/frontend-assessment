import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, ChartType} from "chart.js";
import {ThemeService} from "../../../core/services/theme.service";
import {Theme} from "../../../shared/theme.model";
import {ColorService} from "../../../core/services/color.service";
import {ChartColorModel} from "../../../core/config/chart-color.model";

@Component({
  selector: 'app-data-line-chart',
  templateUrl: './data-line-chart.component.html',
  styleUrls: ['./data-line-chart.component.scss']
})
export class DataLineChartComponent implements OnInit, OnChanges {

  public lineChartType: ChartType = 'line';

  public lineChartConfig: ChartConfiguration | null = null;

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    responsive:true,
    borderColor: 'transparent',
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          borderWidth: 0
        }
      },
      'y-axis-0':
        {
          grid: {
            borderWidth:0,
            borderColor: '#3D3C41',
            display: true
          },
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        display: false,
        grid: {
          display: true,
          borderWidth:0
        },
        ticks: {
          display: false,
          color: 'transparent'
        }
      }
    },

    plugins: {
      legend: { display: false }
    }
  };
  // @ts-ignore
  public lineChartData: ChartConfiguration['data'] = null;

  private activeTheme: Theme | any;
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  @Input() data!: any;

  dataProcessed: boolean = true;



  constructor(private themeService: ThemeService, private cdr:ChangeDetectorRef, private colorService: ColorService) {
    this.activeTheme = themeService.activeTheme;
  }

  ngOnInit(): void {
    this.themeService.getActiveTheme()
      .pipe()
      .subscribe({
        next: (value) => {
          if(value?.name != this.activeTheme.name) {
            this.activeTheme = value;
            this.processChartData(this.data.dataSets);
          }
        }
      });
    this.processChartData(this.data.dataSets);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["data"] && !changes["data"].isFirstChange() && changes["data"].previousValue != changes["data"].currentValue) {
      this.processChartData(this.data.dataSets);
    }
  }



  private processChartData(data: any) {
    this.lineChartData = {
      datasets: this.convertSeriesDataToChartData(data),
      labels: this.extractSeriesLabels(data)
    };
    this.lineChartData.datasets[0].hoverBackgroundColor
    setTimeout(() => {
      this.dataProcessed = true;
      this.cdr.detectChanges();
    }, 100);
  }


  convertSeriesDataToChartData(data: any[]) {
    let chartDataSet: any[] = [];
    const el = <HTMLCanvasElement>document!.getElementById('lineChart');
    const ctx = el.getContext('2d');
    data.forEach((item: any, index: any) => {
      const chartData: any = {};
      chartData.data = item.data.reduce((result: any[], setitem: any) => {
        result.push(setitem.value);
        return result;
      }, []);
      chartData.label = item.label;
      const chartColors = this.colorService.getChartColors(this.activeTheme.name);
      const gradient = ctx!.createLinearGradient(0,0,0, 320);

      if(index == 0) {

        gradient.addColorStop(0, `rgba(${this.colorService.hexToRgb(chartColors!.backgroundColor)}, 0.2)`);
        gradient.addColorStop(0.5, `rgba(${this.colorService.hexToRgb(chartColors!.backgroundColor)}, 0.1)`);
        gradient.addColorStop(1, `rgba(${this.colorService.hexToRgb(chartColors!.backgroundColor)}, 0.05)`);
        chartData.backgroundColor = gradient;
        chartData.borderColor = chartColors?.chartColor;
        chartData.pointBackgroundColor = chartColors?.pointerColor;
        chartData.pointBorderColor = chartColors?.pointerBorderColor;
        chartData.pointHoverBackgroundColor = chartColors?.secondaryColor;
        chartData.pointHoverBorderColor = chartColors?.backgroundColor;
        chartData.fill = true;
      } else if (index > 0) {
        //TODO: Utilize color palette factory for unknown data sets (In this case a finite set is used)
        const color: ChartColorModel = chartColors!.complementaryColorSet![index -1];
        gradient.addColorStop(0, `rgba(${this.colorService.hexToRgb(color!.backgroundColor)}, 0.2)`);
        gradient.addColorStop(0.5, `rgba(${this.colorService.hexToRgb(color!.backgroundColor)}, 0.1)`);
        gradient.addColorStop(1, `rgba(${this.colorService.hexToRgb(color!.backgroundColor)}, 0.05)`);
        chartData.backgroundColor = gradient;
        chartData.borderColor = color.chartColor;
        chartData.pointBackgroundColor = color?.pointerColor;
        chartData.pointBorderColor = color?.pointerBorderColor;
        chartData.pointHoverBackgroundColor = color?.secondaryColor;
        chartData.pointHoverBorderColor = color?.backgroundColor;
        chartData.fill = true;

      }
      chartDataSet.push(chartData);
    });
    return chartDataSet;
  }

  private extractSeriesLabels(data: any[]) {
    return data[0].data.reduce((result: string[], item: any) => {
      result.push(item.key);
      return result;
    }, []);
  }
}
