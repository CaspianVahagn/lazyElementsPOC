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
  selector: 'app-lazy-wrapper',
  templateUrl: './lazy-wrapper.component.html'
})
export class LazyWrapperComponent implements AfterViewInit {
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
      // execute the import of the proxy class
      this.component.prototype.metaProxyImport().then((r: { [x: string]: Type<unknown>; }) => {
        // @ts-ignore
        // get the component from moduly by the name of the proxy class decorator
        try {
        const component = r[this.component.prototype.metaName];
        const resolver = this.factory.resolveComponentFactory(component);
        // @ts-ignore
        const ref: ComponentRef<any> = this.outletRef.createComponent(resolver);
        this.lazyComponentLoaded.emit(ref);
        }catch (e){
          console.error("Module: ", r, " could not be loaded with component: ", this.component.prototype.metaName, e )
        }
      })
    }else {
      console.error("No Component Found!! Cant load")
    }

  }
}

@NgModule({
  declarations: [
    LazyWrapperComponent
  ],
  exports: [
    LazyWrapperComponent
  ]
})
export class DynoModule {
}
