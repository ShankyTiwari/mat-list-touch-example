import { NgModule, } from '@angular/core';
import { CommonModule,  } from '@angular/common';

import { DemoOneRoutingModule } from './demo-one-routing.module';
import { DemoOneComponent } from './demo-one.component';

@NgModule({
  declarations: [DemoOneComponent],
  imports: [
    CommonModule,
    DemoOneRoutingModule
  ],
})
export class DemoOneModule { }
