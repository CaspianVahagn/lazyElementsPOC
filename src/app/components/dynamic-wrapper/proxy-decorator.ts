// tslint:disable-next-line:typedef
export function proxy(metaName: string, proxyImport: () => Promise<any>) {
  // tslint:disable-next-line:ban-types
  return (constructor: Function) => {
    constructor.prototype.metaName = metaName;
    constructor.prototype.metaProxyImport = proxyImport;
  }
}
