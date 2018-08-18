import { Component, ViewEncapsulation } from '@angular/core';
import { GIT_REPO_PROJECTS_BASE } from '../../../../configs/constants';

@Component({
  // tslint:disable-next-line
  selector: 'fn-list',
  template: `<a-link [href]="href">FN List</a-link>`,
  encapsulation: ViewEncapsulation.None,
})
export class DocFnGithubComponent {
  href = `${GIT_REPO_PROJECTS_BASE}/fn/`;
}
