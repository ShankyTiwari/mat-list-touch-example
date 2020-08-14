import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoFourRoutingModule } from './demo-four-routing.module';
import { DemoFourComponent } from './demo-four.component';


@NgModule({
  declarations: [DemoFourComponent],
  imports: [
    CommonModule,
    DemoFourRoutingModule
  ]
})
export class DemoFourModule { }
