import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownCommentsComponent } from './markdown-comments.component';

describe('MarkdownCommentsComponent', () => {
  let component: MarkdownCommentsComponent;
  let fixture: ComponentFixture<MarkdownCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkdownCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
