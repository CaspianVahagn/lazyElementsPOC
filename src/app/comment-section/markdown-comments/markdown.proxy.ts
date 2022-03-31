import {proxy} from "../../components/dynamic-wrapper/proxy-decorator";

@proxy(
  'MarkdownCommentsComponent',
  () => import('src/app/comment-section/markdown-comments/markdown-comments.component')
)
export abstract class MarkdownProxy{

  public abstract handleInput(data:string): void;

}
