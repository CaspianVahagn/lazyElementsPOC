import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownCommentsComponent } from './markdown-comments/markdown-comments.component';
import {FormsModule} from "@angular/forms";
import {TextFieldModule} from "@angular/cdk/text-field";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    MarkdownCommentsComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CommentSectionModule { }
