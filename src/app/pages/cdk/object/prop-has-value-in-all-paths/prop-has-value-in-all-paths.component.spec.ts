import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropHasValueInAllPathsComponent } from './prop-has-value-in-all-paths.component';

describe('PropHasValueInAllPathsComponent', () => {
  let component: PropHasValueInAllPathsComponent;
  let fixture: ComponentFixture<PropHasValueInAllPathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropHasValueInAllPathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropHasValueInAllPathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
