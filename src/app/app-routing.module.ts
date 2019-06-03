import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
//   },
//   {
//     path: 'home',
//     component: HomeComponent
//   },
//   {
//     path: 'app1',
//     loadChildren: () =>
//       import('./lazy/app1-wrapper.module').then(m => m.App1WrapperModule)
//   },
//   {
//     path: 'app2',
//     loadChildren: () =>
//       import('./lazy/app2-wrapper.module').then(m => m.App2WrapperModule)
//   },
//   {
//     path: 'app1/**',
//     redirectTo: 'app1'
//   },
//   {
//     path: 'app2/**',
//     redirectTo: 'app2'
//   },
//   {
//     path: '**',
//     redirectTo: 'home'
//   }
// ];

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'app1',
    loadChildren: () =>
      import('../../projects/app1/src/app/app.module').then(
        mod => mod.AppModule
      ),
    canLoad: [AuthGuard]
  },
  {
    path: 'app2',
    loadChildren: () =>
      import('../../projects/app2/src/app/app.module').then(
        mod => mod.AppModule
      )
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
