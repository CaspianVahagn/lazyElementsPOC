import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { SampleLazyComponent } from './sample-lazy/sample-lazy.component';

import {FormsModule} from "@angular/forms";
import {DynoModule} from "../dynamic-wrapper/lazy-wrapper.component";



@NgModule({
  declarations: [
    SampleComponent,
    SampleLazyComponent
  ],
  imports: [
    CommonModule,
    DynoModule,
    FormsModule,

  ]
})
export class SampleModule { }
