import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListTouchModule } from 'mat-list-touch';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';

import { DefaultDemoComponent } from './default-demo/default-demo.component';
import { SingleListDemoComponent } from './single-list-demo/single-list-demo.component';
import { MultilineDemoComponent } from './multiline-demo/multiline-demo.component';

@NgModule({
  declarations: [DefaultDemoComponent, SingleListDemoComponent, MultilineDemoComponent],
  imports: [
    CommonModule,
    MatListTouchModule,
    MatDividerModule, // Advised as often handy in mat-list scenario's
    MatIconModule, // Advised as often handy in mat-list scenario's
    FlexLayoutModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  exports: [DefaultDemoComponent, SingleListDemoComponent, MultilineDemoComponent]
})
export class MatListTouchDemoModule { }
