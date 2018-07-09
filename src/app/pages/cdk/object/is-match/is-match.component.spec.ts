import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsMatchComponent } from './is-match.component';

describe('IsMatchComponent', () => {
  let component: IsMatchComponent;
  let fixture: ComponentFixture<IsMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IsMatchComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
