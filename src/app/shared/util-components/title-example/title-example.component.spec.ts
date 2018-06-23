import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleExampleComponent } from './title-example.component';

describe('TitleExampleComponent', () => {
  let component: TitleExampleComponent;
  let fixture: ComponentFixture<TitleExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TitleExampleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
