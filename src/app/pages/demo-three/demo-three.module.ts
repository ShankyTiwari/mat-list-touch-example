import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoThreeRoutingModule } from './demo-three-routing.module';
import { DemoThreeComponent } from './demo-three.component';


@NgModule({
  declarations: [DemoThreeComponent],
  imports: [
    CommonModule,
    DemoThreeRoutingModule
  ]
})
export class DemoThreeModule { }
