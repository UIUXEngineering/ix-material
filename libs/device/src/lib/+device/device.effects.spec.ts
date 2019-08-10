import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/angular';
import { DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { DeviceEffects } from './device.effects';
import { LoadDevice, DeviceLoaded } from './device.actions';

describe('DeviceEffects', () => {
  let actions: Observable<any>;
  let effects: DeviceEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        DeviceEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(DeviceEffects);
  });

  describe('loadDevice$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadDevice() });
      expect(effects.loadDevice$).toBeObservable(
        hot('-a-|', { a: new DeviceLoaded([]) })
      );
    });
  });
});
