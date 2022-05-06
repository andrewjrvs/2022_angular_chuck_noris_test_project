import { TestBed } from '@angular/core/testing';

import { NorisJokeFavsService } from './noris-joke-favs.service';

describe('NorisJokeFavsService', () => {
  let service: NorisJokeFavsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NorisJokeFavsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
