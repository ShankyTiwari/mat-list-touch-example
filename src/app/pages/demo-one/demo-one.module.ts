import { NgModule, } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';

import { DemoOneRoutingModule } from './demo-one-routing.module';
import { DemoOneComponent } from './demo-one.component';


import { MatListTouchModule } from 'mat-list-touch';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { GestureConfig } from 'mat-list-touch';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [DemoOneComponent],
  imports: [
    // BrowserAnimationsModule,
    // CommonModule,
    DemoOneRoutingModule,
    MatListTouchModule,
    MatDividerModule, // Advised as often handy in mat-list scenario's
    MatIconModule, // Advised as often handy in mat-list scenario's
    FlexLayoutModule
  ],
  providers: [
      // To override any specific touch behaviors
      {provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig},
  ],
})
export class DemoOneModule { }
