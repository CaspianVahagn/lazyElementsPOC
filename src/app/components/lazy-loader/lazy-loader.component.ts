import {Component, NgModule, OnInit} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-lazy-loader',
  templateUrl: './lazy-loader.component.html',
  styleUrls: ['./lazy-loader.component.scss']
})
export class LazyLoaderComponent implements OnInit {
  public panelOpenState: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
@NgModule({
  declarations: [
    LazyLoaderComponent
  ],
  imports: [
    MatExpansionModule,
    MatButtonModule,
  ],
  exports: [
    LazyLoaderComponent,
  ]
})
export class LazyLoaderModule {
}
