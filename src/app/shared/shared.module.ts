import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {NgChartsModule} from "ng2-charts";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HintTooltipComponent } from './components/hint-tooltip/hint-tooltip.component';
import {InlineSVGModule} from "ng-inline-svg-2";


const MODULES = [
  RouterModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  InlineSVGModule,
  NgChartsModule
];

const SHARED_COMPONENTS = [
  HintTooltipComponent
];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS
  ],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [...MODULES,
    ...SHARED_COMPONENTS
  ]
})
export class SharedModule { }
