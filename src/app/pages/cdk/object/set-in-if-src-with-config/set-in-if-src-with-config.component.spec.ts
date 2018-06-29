import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInIfSrcWithConfigComponent } from './set-in-if-src-with-config.component';

describe('SetInIfSrcWithConfigComponent', () => {
  let component: SetInIfSrcWithConfigComponent;
  let fixture: ComponentFixture<SetInIfSrcWithConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetInIfSrcWithConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetInIfSrcWithConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
