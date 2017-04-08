import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2CompleterModule } from "ng2-completer";

import { AppComponent } from './app.component';
import { AppRoutingModule,routingComponents } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2CompleterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }