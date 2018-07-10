import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TernaryComponent } from './ternary.component';

describe('TernaryComponent', () => {
  let component: TernaryComponent;
  let fixture: ComponentFixture<TernaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TernaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TernaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
