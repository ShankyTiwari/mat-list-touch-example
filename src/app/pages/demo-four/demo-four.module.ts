import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListTouchDemoModule } from './../../mat-list-touch/mat-list-touch-demo.module';

import { DemoFourRoutingModule } from './demo-four-routing.module';
import { DemoFourComponent } from './demo-four.component';

@NgModule({
  declarations: [DemoFourComponent],
  imports: [
    CommonModule,
    DemoFourRoutingModule,
    MatListTouchDemoModule
  ]
})
export class DemoFourModule { }
