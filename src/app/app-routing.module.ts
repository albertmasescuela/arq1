import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  // {
  //   path: 'app1',
  //   loadChildren: './lazy/app1-wrapper.module#App1WrapperModule'
  // },
  {
    path: 'app1',
    loadChildren: () =>
      import('./lazy/app1-wrapper.module').then(m => m.App1WrapperModule)
  },
  {
    path: 'app2',
    loadChildren: () =>
      import('./lazy/app2-wrapper.module').then(m => m.App2WrapperModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
