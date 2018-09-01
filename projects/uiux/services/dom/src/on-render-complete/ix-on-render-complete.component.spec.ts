import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IxOnRenderCompleteComponent } from './ix-on-render-complete.component';
import { IxOnRenderCompleteService } from './ix-on-render-complete.service';

describe('IxOnRenderCompleteComponent', () => {
  let component: IxOnRenderCompleteComponent;
  let fixture: ComponentFixture<IxOnRenderCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IxOnRenderCompleteComponent],
      providers: [IxOnRenderCompleteService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IxOnRenderCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
