import { TestBed } from '@angular/core/testing';

import { BseService } from './bse.service';

describe('BseService', () => {
  let service: BseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
