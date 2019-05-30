import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LlistaComponent } from './llista/llista.component';
import { DetallComponent } from './detall/detall.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'llista', pathMatch: 'full' },
      { path: 'llista', component: LlistaComponent },
      { path: 'detall', component: DetallComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
