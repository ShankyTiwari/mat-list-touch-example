import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HAMMER_GESTURE_CONFIG, HammerModule} from '@angular/platform-browser';
import { GestureConfig } from 'mat-list-touch';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HammerModule
  ],
  providers: [
    // To override any specific touch behaviors
      {provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
