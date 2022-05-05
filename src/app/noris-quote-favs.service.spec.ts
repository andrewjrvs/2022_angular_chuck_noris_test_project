import { TestBed } from '@angular/core/testing';

import { NorisQuoteFavsService } from './noris-quote-favs.service';

describe('NorisQuoteFavsService', () => {
  let service: NorisQuoteFavsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NorisQuoteFavsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
