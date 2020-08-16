import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
}, {
  path: 'raw-demo',
  loadChildren: () => import('./pages/raw-demo/raw-demo.module').then(m => m.RawDemoModule)
}, {
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: '/documentation',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
