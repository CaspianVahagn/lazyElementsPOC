import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {marked} from "marked";
import {MarkdownProxy} from "./markdown.proxy";
import * as DOMPurify from "dompurify";
import {SAMPLE} from "./consts-md";


@Component({
  selector: 'app-markdown-comments',
  templateUrl: './markdown-comments.component.html',
  styleUrls: ['./markdown-comments.component.scss']
})
export class MarkdownCommentsComponent extends MarkdownProxy {
  private mdInput= SAMPLE;
  public text ="";
  get outputData():SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(DOMPurify.sanitize(marked(this.mdInput)));
  }
  constructor(private sanitizer: DomSanitizer, private _ngZone: NgZone) {
    super();
  }
  public handleInput($event: any): void {
    this.mdInput = $event;
  }
}
