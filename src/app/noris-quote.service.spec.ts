import { TestBed } from '@angular/core/testing';

import { NorisQuoteService } from './noris-quote.service';

describe('NorisQuoteService', () => {
  let service: NorisQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NorisQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
