import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FN, GIT_REPO_PROJECTS_BASE } from '../../../../../configs/constants';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'store-subject',
  templateUrl: './store-subject.component.html',
  styleUrls: ['./store-subject.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreSubjectComponent implements OnInit {
  data: IDataItem = ROUTES.fn.store.storeSubject;

  actionSpec = `${GIT_REPO_PROJECTS_BASE}/${FN}/store/src/store-subject.action.spec.ts`;
  behaviorSpec = `${GIT_REPO_PROJECTS_BASE}/${FN}/store/src/store-subject.behavior.spec.ts`;
  composeSpec = `${GIT_REPO_PROJECTS_BASE}/${FN}/store/src/store-subject.compose.spec.ts`;
  transformSpec = `${GIT_REPO_PROJECTS_BASE}/${FN}/store/src/store-subject.transform.spec.ts`;
  updateSpec = `${GIT_REPO_PROJECTS_BASE}/${FN}/store/src/store-subject.update.spec.ts`;
  transformStoreSpec = `${GIT_REPO_PROJECTS_BASE}/${FN}/store/src/transform-store-subject.spec.ts`;
  constructor() {}

  ngOnInit() {}
}
