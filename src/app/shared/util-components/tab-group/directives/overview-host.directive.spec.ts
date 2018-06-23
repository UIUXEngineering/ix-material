import { ViewContainerRef } from '@angular/core';
import { OverviewHostDirective } from './overview-host.directive';

describe('OverviewHostDirective', () => {
  it('should create an instance', () => {
    const directive = new OverviewHostDirective(<ViewContainerRef>{});
    expect(directive).toBeTruthy();
  });
});
