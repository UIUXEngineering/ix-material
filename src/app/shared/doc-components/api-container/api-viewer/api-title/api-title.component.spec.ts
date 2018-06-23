import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTitleComponent } from './api-title.component';

describe('ApiRefComponent', () => {
  let component: ApiTitleComponent;
  let fixture: ComponentFixture<ApiTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApiTitleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
