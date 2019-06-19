import { TestBed } from '@angular/core/testing';

import { CanDeActivateGuardService } from './can-de-activate-guard.service';

describe('CanDeActivateGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanDeActivateGuardService = TestBed.get(CanDeActivateGuardService);
    expect(service).toBeTruthy();
  });
});
