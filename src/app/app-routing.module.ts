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
  //   path: 'libmeva-experimental',
  //   loadChildren: () => import('@masalbertwork/lib1').then(m => m.Lib1Module)
  // },
  {
    path: 'app1',
    loadChildren: './lazy/app1-wrapper.module#App1WrapperModule'
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
