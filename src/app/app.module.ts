import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SampleModule} from "./components/sample/sample.module";
import {SampleComponent} from "./components/sample/sample/sample.component";
import {createCustomElement} from "@angular/elements";
import {SampleLazyComponent} from "./components/sample/sample-lazy/sample-lazy.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SampleModule,
    BrowserAnimationsModule
  ],
  providers: []
})
export class AppModule implements DoBootstrap{
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    const ele1= createCustomElement(SampleComponent, { injector: this.injector });
    customElements.define('my-ele-one', ele1);

    const ele2= createCustomElement(SampleLazyComponent, { injector: this.injector });
    customElements.define('my-ele-lazy', ele2);
  }
}
