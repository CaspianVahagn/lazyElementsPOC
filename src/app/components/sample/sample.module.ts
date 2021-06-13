import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { SampleLazyComponent } from './sample-lazy/sample-lazy.component';
import {DynoModule} from "../dynamic-wrapper/dyno-wrapper.component";



@NgModule({
  declarations: [
    SampleComponent,
    SampleLazyComponent
  ],
  imports: [
    CommonModule,
    DynoModule
  ]
})
export class SampleModule { }
