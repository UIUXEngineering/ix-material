import { Component, ViewEncapsulation } from '@angular/core';
import { GIT_REPO_PROJECTS_BASE } from '../../../../configs/constants';

@Component({
  // tslint:disable-next-line
  selector: 'components-list',
  template: `<a-link [href]="href">Components List</a-link>`,
  encapsulation: ViewEncapsulation.None,
})
export class DocMaterialGithubComponent {
  href = `${GIT_REPO_PROJECTS_BASE}/material/src/public_api.ts`;
}
