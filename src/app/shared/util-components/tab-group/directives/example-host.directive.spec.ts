import { ViewContainerRef } from '@angular/core';
import { ExampleHostDirective } from './example-host.directive';

describe('ExampleHostDirective', () => {
  it('should create an instance', () => {
    const directive = new ExampleHostDirective(<ViewContainerRef>{});
    expect(directive).toBeTruthy();
  });
});
