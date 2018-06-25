import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvokeIfElseInConfigComponent } from './invoke-if-else-in-config.component';

describe('InvokeIfElseInConfigComponent', () => {
  let component: InvokeIfElseInConfigComponent;
  let fixture: ComponentFixture<InvokeIfElseInConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvokeIfElseInConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvokeIfElseInConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
