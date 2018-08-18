import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsAreTruthyComponent } from './props-are-truthy.component';

describe('PropsAreTruthyComponent', () => {
  let component: PropsAreTruthyComponent;
  let fixture: ComponentFixture<PropsAreTruthyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PropsAreTruthyComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropsAreTruthyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
