import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownContainerComponent } from './overview-container.component';

describe('OverviewContainerComponent', () => {
  let component: MarkdownContainerComponent;
  let fixture: ComponentFixture<MarkdownContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarkdownContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
