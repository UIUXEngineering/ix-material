// import { ChangeDetectorRef } from '@angular/core';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { ApiRefService } from '../../../services/api-ref/api-ref.service';
// import { RouteService } from '../../../services/route/route.service';
//
// import { SeeAlsoComponent } from './see-also.component';
//
// fdescribe('SeeAlsoComponent', () => {
//   let component: SeeAlsoComponent;
//   let fixture: ComponentFixture<SeeAlsoComponent>;
//
//   beforeEach(async(() => {
//
//     class MockApiRefService {
//       getDataItem() {}
//     }
//
//     const apiRefService = {
//       provide: ApiRefService,
//       useValue: new MockApiRefService()
//     };
//
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule],
//       declarations: [SeeAlsoComponent],
//       providers: [apiRefService]
//     }).compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(SeeAlsoComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
