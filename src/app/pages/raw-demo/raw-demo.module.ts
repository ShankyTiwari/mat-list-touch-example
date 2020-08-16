import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RawDemoComponent } from './raw-demo.component';
import { RawDemoRoutingModule } from './raw-demo-routing.module';

import { MatListTouchDemoModule } from './../../mat-list-touch/mat-list-touch-demo.module';

@NgModule({
  declarations: [RawDemoComponent],
  imports: [
    CommonModule,
    RawDemoRoutingModule,
    MatListTouchDemoModule
  ]
})
export class RawDemoModule { }
