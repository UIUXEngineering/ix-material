import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeySplitterIntoImmutablePathComponent } from './key-splitter-into-immutable-path.component';

describe('KeySplitterIntoImmutablePathComponent', () => {
  let component: KeySplitterIntoImmutablePathComponent;
  let fixture: ComponentFixture<KeySplitterIntoImmutablePathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeySplitterIntoImmutablePathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeySplitterIntoImmutablePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
