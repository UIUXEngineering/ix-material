import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBasicExampleComponent } from './menu-example.component';

describe('MenuExampleComponent', () => {
  let component: MenuBasicExampleComponent;
  let fixture: ComponentFixture<MenuBasicExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuBasicExampleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBasicExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
