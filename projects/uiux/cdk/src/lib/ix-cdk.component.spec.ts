import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IxCdkComponent } from './ix-cdk.component';

describe('IxCdkComponent', () => {
  let component: IxCdkComponent;
  let fixture: ComponentFixture<IxCdkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IxCdkComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IxCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
