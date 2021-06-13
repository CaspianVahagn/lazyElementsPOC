import {proxy} from "../dynamic-wrapper/proxy-decorator";

@proxy(
  'LazyLoaderComponent',
  () => import('src/app/components/lazy-loader/lazy-loader.component')
)
export abstract class LazyLoaderProxy{
  public abstract evento(): void;
}
