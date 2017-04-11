import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, XHRBackend, XSRFStrategy } from '@angular/http';
import { Ng2CompleterModule } from 'ng2-completer';
import { ChartsModule } from 'ng2-charts';
import { HttpInterceptor } from './http-interceptor';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing';

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
    Ng2CompleterModule,
    ChartsModule
  ],
  providers: [
    {
      deps: [XHRBackend, RequestOptions],
      provide: HttpInterceptor,
      useFactory: HttpInterceptorFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function HttpInterceptorFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
  return new HttpInterceptor(backend, defaultOptions);
}
