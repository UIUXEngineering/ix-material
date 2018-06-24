import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObjectWithPathComponent } from './create-object-with-path.component';

describe('CreateObjectWithPathComponent', () => {
  let component: CreateObjectWithPathComponent;
  let fixture: ComponentFixture<CreateObjectWithPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateObjectWithPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateObjectWithPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
