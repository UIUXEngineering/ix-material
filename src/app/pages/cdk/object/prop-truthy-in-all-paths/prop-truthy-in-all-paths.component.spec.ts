import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropTruthyInAllPathsComponent } from './prop-truthy-in-all-paths.component';

describe('PropTruthyInAllPathsComponent', () => {
  let component: PropTruthyInAllPathsComponent;
  let fixture: ComponentFixture<PropTruthyInAllPathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropTruthyInAllPathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropTruthyInAllPathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
