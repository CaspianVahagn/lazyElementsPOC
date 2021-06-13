import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  NgModule,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {timer} from "rxjs";


@Component({
  selector: 'app-dyno-wrapper',
  templateUrl: './dyno-wrapper.component.html'
})
export class DynoWrapperComponent implements AfterViewInit {
  constructor(private factory: ComponentFactoryResolver) {
  }

  @ViewChild('outletRef', {read: ViewContainerRef})
  public outletRef!: ViewContainerRef;

  @Input()
  public component!: any;

  ngAfterViewInit(): void {
    if(this.component){
      this.component.prototype.metaProxyImport().then((r: { [x: string]: Type<unknown>; }) => {
        // @ts-ignore
        console.log('OK1');
        // @ts-ignore
        console.log(this.component.prototype.metaName);
        console.log('OK2');
        console.log(r);
        // @ts-ignore
        const resolver = this.factory.resolveComponentFactory(r[this.component.prototype.metaName]);
        console.log('OK3');
        // @ts-ignore
        const ref: ComponentRef<any> = this.outletRef.createComponent(resolver);
      })
    }else {
      console.error("NO Component Found!! Cant load")
    }

  }
}

@NgModule({
  declarations: [
    DynoWrapperComponent
  ],
  exports: [
    DynoWrapperComponent
  ]
})
export class DynoModule {
}
