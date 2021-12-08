import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplePageComponent } from './sample-page.component';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SamplePageComponent
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
