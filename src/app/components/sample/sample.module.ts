import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { SampleLazyComponent } from './sample-lazy/sample-lazy.component';
import {DynoModule} from "../dynamic-wrapper/dyno-wrapper.component";
import {FormsModule} from "@angular/forms";



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
