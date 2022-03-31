import {Component, ComponentRef, OnInit} from '@angular/core';
import {LazyLoaderProxy} from "../../lazy-loader/LazyLoader.proxy";
import {MarkdownProxy} from "../../../comment-section/markdown-comments/markdown.proxy";

@Component({
  selector: 'app-sample-lazy',
  templateUrl: './sample-lazy.component.html',
  styleUrls: ['./sample-lazy.component.scss']
})
export class SampleLazyComponent implements OnInit {

  public proxy = MarkdownProxy;
  public text =" hello";
  public instaceOfProxy?: MarkdownProxy;
  constructor() { }

  ngOnInit(): void {
  }

  public onLazyLoadedComponent($event: ComponentRef<MarkdownProxy>): void {
    console.log("instance loaded")
    this.instaceOfProxy = $event.instance
  }

  public textChange($event: string): void{
    if(this.instaceOfProxy){
      this.instaceOfProxy.handleInput($event);
    }
  }


}
