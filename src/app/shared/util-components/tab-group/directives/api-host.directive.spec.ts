import { ViewContainerRef } from '@angular/core';
import { ApiHostDirective } from './api-host.directive';

describe('ApiHostDirective', () => {
  it('should create an instance', () => {
    const directive = new ApiHostDirective(<ViewContainerRef>{});
    expect(directive).toBeTruthy();
  });
});
