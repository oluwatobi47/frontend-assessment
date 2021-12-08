import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import {ThemeService} from "../../../core/services/theme.service";
import {ColorService} from "../../../core/services/color.service";
import {Theme} from "../../../shared/theme.model";

@Component({
  selector: 'app-data-pie-chart',
  templateUrl: './data-pie-chart.component.html',
  styleUrls: ['./data-pie-chart.component.scss']
})
export class DataPieChartComponent implements OnInit, OnChanges {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() data!: any;

  public pieChartOptions: ChartConfiguration['options'] | any= {
    responsive: true,
    cutout:'80%',
    borderRadius:30,
    borderWidth:5,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      }
    }
  };
  public pieChartData!: ChartData<'doughnut', number[], string | string[]>;
  public pieChartType: ChartType = 'doughnut';
  public doughnutChartPlugins: any[] = [];

  private activeTheme: Theme | any;

  constructor(private themeService: ThemeService, private colorService: ColorService) {
    this.activeTheme = themeService.activeTheme;
  }

  ngOnInit(): void {
    this.themeService.getActiveTheme()
      .pipe()
      .subscribe({
        next: (value) => {
          if(value?.name != this.activeTheme.name) {
            this.activeTheme = value;
            this.processChartData(this.data.summary);
          }
        }
      });
    this.processChartData(this.data.summary);
  }


  processChartData(summaryData: any) {
    const {activeUsers, inActiveUsers, frequentUsers} = summaryData;
    const primaryRgb = this.colorService.hexToRgb(this.activeTheme.themeColors['--primary']);
    const colorData = [`rgba(${primaryRgb},1)`, `rgba(${primaryRgb},0.75)`, `rgba(${primaryRgb},0.5)`];
    const hoverColor = [`rgba(${primaryRgb},1)`, `rgba(${primaryRgb},0.75)`, `rgba(${primaryRgb},0.5)`];
    const borderColor = [`rgba(${primaryRgb},.01)`, `rgba(${primaryRgb},0.01)`, `rgba(${primaryRgb},0.01)`];

    const formattedNumber = (x: number) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const total = activeUsers+ inActiveUsers;
    //TODO: Extract to utility class
    const that = this;
    this.doughnutChartPlugins= [{
      beforeDraw(chart: any) {
        const ctx = chart.ctx;
        const txt = 'Center Text';

        //Get options from the center object in options
        const sidePadding = 60;
        const sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
        const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);

        //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
        const stringWidth = ctx.measureText(txt).width;
        const elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

        // Find out how much the font can grow in width.
        const widthRatio = elementWidth / stringWidth;
        const newFontSize = Math.floor(30 * widthRatio);
        const elementHeight = (chart.innerRadius * 2);
        const fontSizeToUse = Math.min(newFontSize, elementHeight);
        // Draw text in center

        // ctx.font = fontSizeToUse + 'px Arial';
        ctx.font = '25px Source Sans Pro';
        ctx.fontWeight = 600;
        ctx.fillStyle = that.activeTheme.themeColors['--text-color'];
        ctx.fillText(`${formattedNumber(total)}`, centerX, centerY - 10);

        ctx.font = '15px Source Sans Pro';
        ctx.fontWeight = 400;
        ctx.fillStyle = that.activeTheme.themeColors['--text-color-light'];
        ctx.fillText('Total', centerX, centerY + 15);

      }
    }];

    this.pieChartData = {
      labels: ['Active', 'Frequent', 'Inactive'],
      datasets: [ {data: [ activeUsers, frequentUsers, inActiveUsers ],
        backgroundColor: colorData,
        hoverBackgroundColor: hoverColor,
        borderColor:  borderColor,
        hoverBorderColor: borderColor
      }]
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["data"] && !changes["data"].isFirstChange() && changes["data"].previousValue != changes["data"].currentValue) {
      this.processChartData(this.data.summary);
    }
  }
}
