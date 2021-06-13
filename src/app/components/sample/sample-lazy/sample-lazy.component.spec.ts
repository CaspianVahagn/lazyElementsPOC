import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleLazyComponent } from './sample-lazy.component';

describe('SampleLazyComponent', () => {
  let component: SampleLazyComponent;
  let fixture: ComponentFixture<SampleLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
