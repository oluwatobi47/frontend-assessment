import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {DataLineChartComponent} from "./data-line-chart/data-line-chart.component";
import {DataPieChartComponent} from "./data-pie-chart/data-pie-chart.component";
import { RightPanelComponent } from './right-panel/right-panel.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DataLineChartComponent,
    DataPieChartComponent,
    RightPanelComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: DashboardComponent}
    ])
  ]
})
export class DashboardModule { }
