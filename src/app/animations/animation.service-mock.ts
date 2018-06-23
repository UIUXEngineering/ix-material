import { AppAnimationService } from './animation.service';

class MockSplashScreenService {
  initialize(): void {
    /* noop */
  }

  fadeOut(): void {
    /* noop */
  }

  removeSplashElements(): void {
    /* noop */
  }
}

export function createSplashMock(): any {
  const mockInstance: any = new MockSplashScreenService();

  const provider: any = {
    provide: AppAnimationService,
    useValue: mockInstance,
  };

  return {
    mock: mockInstance,
    provider: provider,
  };
}
