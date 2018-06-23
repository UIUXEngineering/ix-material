import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiContainerComponent } from './api-container.component';

describe('ApiContainerComponent', () => {
  let component: ApiContainerComponent;
  let fixture: ComponentFixture<ApiContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApiContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
