import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RawDemoComponent } from './raw-demo.component';

const routes: Routes = [{
  path: '',
  component: RawDemoComponent,
}, {
  path: '**',
  redirectTo: '/',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RawDemoRoutingModule { }
