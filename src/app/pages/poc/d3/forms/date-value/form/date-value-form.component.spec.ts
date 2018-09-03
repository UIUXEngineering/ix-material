import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DateValueFormModule } from '../date-value-form.module';
import { DateValueFormComponent } from './date-value-form.component';


describe('DateValueComponent', () => {
  let component: DateValueFormComponent;
  let fixture: ComponentFixture<DateValueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DateValueFormModule
      ],
      // declarations: [ DateValueFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateValueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
