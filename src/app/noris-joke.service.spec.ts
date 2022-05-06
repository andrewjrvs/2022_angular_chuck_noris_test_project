import { TestBed } from '@angular/core/testing';

import { NorisJokeService } from './noris-joke.service';

describe('NorisJokeService', () => {
  let service: NorisJokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NorisJokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
