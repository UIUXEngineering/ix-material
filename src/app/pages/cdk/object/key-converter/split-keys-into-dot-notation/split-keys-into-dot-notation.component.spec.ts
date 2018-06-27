import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitKeysIntoDotNotationComponent } from './split-keys-into-dot-notation.component';

describe('SplitKeysIntoDotNotationComponent', () => {
  let component: SplitKeysIntoDotNotationComponent;
  let fixture: ComponentFixture<SplitKeysIntoDotNotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitKeysIntoDotNotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitKeysIntoDotNotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
