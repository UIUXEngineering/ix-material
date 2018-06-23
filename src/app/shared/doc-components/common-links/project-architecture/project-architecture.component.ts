import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'project-architecture',
  templateUrl: './project-architecture.component.html',
  styleUrls: ['./project-architecture.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectArchitectureComponent {}
