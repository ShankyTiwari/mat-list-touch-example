import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoSixComponent } from './demo-six.component';

const routes: Routes = [{
  path: '',
  component: DemoSixComponent
}, {
  path: '**',
  redirectTo: '/',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoSixRoutingModule { }
