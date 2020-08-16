import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListTouchDemoModule } from './../../mat-list-touch/mat-list-touch-demo.module';

import { DemoThreeRoutingModule } from './demo-three-routing.module';
import { DemoThreeComponent } from './demo-three.component';


@NgModule({
  declarations: [DemoThreeComponent],
  imports: [
    CommonModule,
    DemoThreeRoutingModule,
    MatListTouchDemoModule
  ]
})
export class DemoThreeModule { }
