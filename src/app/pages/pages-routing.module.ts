import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'documentation',
    loadChildren: () => import('./documentation/documentation.module').then(m => m.DocumentationModule)
  }, {
    path: 'demo-one',
    loadChildren: () => import('./demo-one/demo-one.module').then(m => m.DemoOneModule)
  }, {
    path: 'demo-two',
    loadChildren: () => import('./demo-two/demo-two.module').then(m => m.DemoTwoModule)
  }, {
    path: 'demo-three',
    loadChildren: () => import('./demo-three/demo-three.module').then(m => m.DemoThreeModule)
  }, {
    path: 'demo-four',
    loadChildren: () => import('./demo-four/demo-four.module').then(m => m.DemoFourModule)
  }, {
    path: '',
    redirectTo: '/demo-one',
    pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
