import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListTouchDemoModule } from './../../mat-list-touch/mat-list-touch-demo.module';

import { DemoSixRoutingModule } from './demo-six-routing.module';
import { DemoSixComponent } from './demo-six.component';


@NgModule({
  declarations: [DemoSixComponent],
  imports: [
    CommonModule,
    DemoSixRoutingModule,
    MatListTouchDemoModule
  ]
})
export class DemoSixModule { }
