import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentModule } from './../component/component.module';
import { MaterialModule } from '../modules/material.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { FourNotFourComponent } from './four-not-four/four-not-four.component';


@NgModule({
  declarations: [PagesComponent, FourNotFourComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentModule,
    MaterialModule
  ]
})
export class PagesModule { }
