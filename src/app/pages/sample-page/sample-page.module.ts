import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplePageComponent } from './sample-page.component';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import { WidgetHeaderComponent } from './widget-header/widget-header.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { TripTypeComponent } from './trip-type/trip-type.component';
import { WidgetListItemComponent } from './widget-list/widget-list-item/widget-list-item.component';



@NgModule({
  declarations: [
    SamplePageComponent,
    WidgetHeaderComponent,
    WidgetListComponent,
    TripTypeComponent,
    WidgetListItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SamplePageComponent
      }
    ])
  ]
})
export class SamplePageModule { }
