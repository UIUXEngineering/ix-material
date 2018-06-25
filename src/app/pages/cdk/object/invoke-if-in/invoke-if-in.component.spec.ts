import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvokeIfInComponent } from './invoke-if-in.component';

describe('InvokeIfInComponent', () => {
  let component: InvokeIfInComponent;
  let fixture: ComponentFixture<InvokeIfInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvokeIfInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvokeIfInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
