import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListTouchDemoModule } from './../../mat-list-touch/mat-list-touch-demo.module';

import { DemoFiveRoutingModule } from './demo-five-routing.module';
import { DemoFiveComponent } from './demo-five.component';


@NgModule({
  declarations: [DemoFiveComponent],
  imports: [
    CommonModule,
    DemoFiveRoutingModule,
    MatListTouchDemoModule
  ]
})
export class DemoFiveModule { }
