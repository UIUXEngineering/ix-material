import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuApiComponent } from './menu-api.component';

describe('MenuApiComponent', () => {
  let component: MenuApiComponent;
  let fixture: ComponentFixture<MenuApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuApiComponent],
    });

    TestBed.overrideComponent(MenuApiComponent, {
      set: {
        template: '<div>Override Template</div>',
      },
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
