//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LlistaComponent } from './llista/llista.component';
import { DetallComponent } from './detall/detall.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AppComponent, LlistaComponent, DetallComponent],
  imports: [AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
