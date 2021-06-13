import { Component, OnInit } from '@angular/core';
import {LazyLoaderProxy} from "../../lazy-loader/LazyLoader.proxy";

@Component({
  selector: 'app-sample-lazy',
  templateUrl: './sample-lazy.component.html',
  styleUrls: ['./sample-lazy.component.scss']
})
export class SampleLazyComponent implements OnInit {

  public proxy = LazyLoaderProxy;

  constructor() { }

  ngOnInit(): void {
  }

}
