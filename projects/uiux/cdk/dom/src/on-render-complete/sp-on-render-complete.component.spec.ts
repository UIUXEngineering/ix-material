import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpOnRenderCompleteComponent } from './sp-on-render-complete.component';

describe('SpOnRenderCompleteComponent', () => {
  let component: SpOnRenderCompleteComponent;
  let fixture: ComponentFixture<SpOnRenderCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpOnRenderCompleteComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpOnRenderCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
