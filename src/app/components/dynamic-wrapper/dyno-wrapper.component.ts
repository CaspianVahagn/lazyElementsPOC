import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef, EventEmitter, Injector,
  Input,
  NgModule, Output,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';


@Component({
  selector: 'app-dyno-wrapper',
  templateUrl: './dyno-wrapper.component.html'
})
export class DynoWrapperComponent implements AfterViewInit {
  constructor(private factory: ComponentFactoryResolver, private injector: Injector) {
  }

  @ViewChild('outletRef', {read: ViewContainerRef})
  public outletRef!: ViewContainerRef;

  @Input()
  public component!: any;

  @Output()
  public lazyComponentLoaded = new EventEmitter<ComponentRef<any>>();

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
        const component = r[this.component.prototype.metaName];
        const resolver = this.factory.resolveComponentFactory(component);
        console.log('OK3');
        // @ts-ignore
        const ref: ComponentRef<any> = this.outletRef.createComponent(resolver);
        this.lazyComponentLoaded.emit(ref);
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
