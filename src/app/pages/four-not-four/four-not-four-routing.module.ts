import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FourNotFourComponent } from './four-not-four.component'

const routes: Routes = [{
  path: '',
  component: FourNotFourComponent
}, {
  path: '**',
  redirectTo: '/',
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FourNotFourRoutingModule { }
