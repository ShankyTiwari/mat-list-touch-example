import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoTwoRoutingModule } from './demo-two-routing.module';
import { DemoTwoComponent } from './demo-two.component';


@NgModule({
  declarations: [DemoTwoComponent],
  imports: [
    CommonModule,
    DemoTwoRoutingModule
  ]
})
export class DemoTwoModule { }
