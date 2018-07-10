import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { H3LinkComponent } from '../../doc-components/h3/h3-link.component';
import { HeaderLinkComponent } from '../doc-viewer/header-link.component';

import { TitleExampleComponent } from './title-example.component';

describe('TitleExampleComponent', () => {
  let component: TitleExampleComponent;
  let fixture: ComponentFixture<TitleExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        RouterTestingModule,
      ],
      declarations: [
        TitleExampleComponent,
        H3LinkComponent,
        HeaderLinkComponent,
      ],
      providers: [
      ]
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
