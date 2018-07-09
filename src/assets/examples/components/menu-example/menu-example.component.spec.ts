import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../../../app/shared/shared.module';

import { MenuBasicExampleComponent } from './menu-example.component';

describe('MenuExampleComponent', () => {
  let component: MenuBasicExampleComponent;
  let fixture: ComponentFixture<MenuBasicExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
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
