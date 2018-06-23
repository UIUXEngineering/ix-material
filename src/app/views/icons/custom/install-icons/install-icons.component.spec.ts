import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallIconsComponent } from './install-icons.component';

describe('InstallIconsComponent', () => {
  let component: InstallIconsComponent;
  let fixture: ComponentFixture<InstallIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstallIconsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
