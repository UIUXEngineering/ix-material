import { Component, ViewEncapsulation } from '@angular/core';
import { GIT_REPO_PROJECTS_BASE } from '../../../../configs/constants';

@Component({
  // tslint:disable-next-line
  selector: 'cdk-list',
  template: `<a-link [href]="href">CDK List</a-link>`,
  encapsulation: ViewEncapsulation.None,
})
export class DocCdkGithubComponent {
  href = `${GIT_REPO_PROJECTS_BASE}/cdk/`;
}
