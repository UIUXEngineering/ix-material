import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentHeaderModule, ComponentPageHeaderComponent } from './component-page-header';
import { DocsAppTestingModule } from '../../../testing/testing-module';

describe('ComponentPageHeader', () => {
  let fixture: ComponentFixture<ComponentPageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentHeaderModule, DocsAppTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentPageHeaderComponent);
  });

  it('should return the title', () => {
    const component = fixture.componentInstance;
    const title = 'foobar';
    fixture.detectChanges();
    component._componentPageTitle.anchor = title;
    expect(component.getTitle()).toEqual(title);
  });

  it('should emit a toggleSideNav event', () => {
    const component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component.toggleSidenav, 'emit');
    fixture.nativeElement.querySelector('.sidenav-toggle').click();
    expect(component.toggleSidenav.emit).toHaveBeenCalled();
  });
});
