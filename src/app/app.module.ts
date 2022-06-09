import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompartidosModule } from './compartidos/compartidos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    CompartidosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
