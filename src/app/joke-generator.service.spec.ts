import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { JokeGeneratorService } from './joke-generator.service';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';

describe('JokeGeneratorService', () => {
  let service: JokeGeneratorService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(JokeGeneratorService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a request to the api', waitForAsync(() => {
    const jkrply = { "type": "success", "value": [ { "id": 458, "joke": "Chuck Norris can write infinite recursion functions and have them return.", "categories": ["nerdy"] } ]  }

    const obj = service.getJoke().subscribe(dt => {
      expect(dt).toEqual(jkrply.value[0]);
    });
    const req = httpMock.expectOne(environment.urls.joke_source);
    req.flush(jkrply);

    expect(req.request.method).toBe('GET');
  }));

  it(`should throw an error when type success not returned`, waitForAsync(() => {
    const jkrply = { "type": "other", "value": [ { "id": 458, "joke": "Chuck Norris can write infinite recursion functions and have them return.", "categories": ["nerdy"] } ]  }

    const obj = service.getJoke().pipe(
    ).subscribe({
      next: dt => expect(false).toBeTruthy,
      error: err => {
        expect(err).toBeInstanceOf(Error);
        expect((err as Error).message).toEqual('api request failed')
      },
    });
    const req = httpMock.expectOne(environment.urls.joke_source);
    req.flush(jkrply);
  }));

  it(`should throw an error when no value is returned`, waitForAsync(() => {
    const jkrply = { "type": "success", "value": [ ]  }

    const obj = service.getJoke().pipe(
    ).subscribe({
      next: dt => expect(false).toBeTruthy,
      error: err => {
        expect(err).toBeInstanceOf(Error);
        expect((err as Error).message).toEqual('missing jokes')
      },
    });
    const req = httpMock.expectOne(environment.urls.joke_source);
    req.flush(jkrply);
  }));

});
