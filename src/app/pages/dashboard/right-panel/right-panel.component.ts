import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import {ThemeService} from "../../../core/services/theme.service";
import {ColorService} from "../../../core/services/color.service";
import {Theme} from "../../../shared/theme.model";

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {

  tradingOptions = [
    {
      icon: '/assets/logos/google.svg',
      name: 'Google',
    },
    {
      icon: '/assets/logos/foursquare.svg',
      name: 'Foursquare',
    },
    {
      icon: '/assets/logos/kickstarter.svg',
      name: 'Kickstarter',
    },
    {
      icon: '/assets/logos/talk.svg',
      name: 'Talk',
    }
  ];

  incomeData = {
    percentage: 25,
    percentageIncrease: 15
  };

  public pieChartOptions: ChartConfiguration['options'] | any= {
    responsive: true,
    cutout:'80%',
    borderRadius:30,
    borderWidth:5,
    plugins: {
      tooltip: {
        enabled: false
      },
      legend: {
        display: false,
        position: 'top',
      }
    }
  };

  public doughnutChartPlugins: any[] = [];
  public pieChartData!: ChartData<'doughnut', number[], string | string[]>;
  public pieChartType: ChartType = 'doughnut';



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
            this.processChartData(this.incomeData.percentage);
          }
        }
      });
    this.processChartData(this.incomeData.percentage);
  }

  processChartData(incomePercentage: any) {
    const primaryRgb = this.colorService.hexToRgb(this.activeTheme.themeColors['--primary']);
    const colorData = [`rgba(${primaryRgb},1)`, `rgba(${primaryRgb},0.1)`];
    const hoverColor = [`rgba(${primaryRgb},1)`,  `rgba(${primaryRgb},0.1)`];
    const borderColor = [`rgba(${primaryRgb},0.01)`, `rgba(${primaryRgb},0.01)`];
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

        ctx.font = fontSizeToUse + 'px Arial';
        ctx.fillStyle = that.activeTheme.themeColors['--text-color'];

        // Draw text in center
        ctx.fillText(`${incomePercentage}%`, centerX, centerY);
      }
    }];
    this.pieChartData = {
      labels: ['Percentage', '', ''],
      datasets: [ {data: [ incomePercentage, 100-incomePercentage ],
        backgroundColor: colorData,
        hoverBackgroundColor: hoverColor,
        borderColor:  borderColor,
        hoverBorderColor: borderColor
      }]
    };
  }

}
