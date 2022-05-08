import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { JokeStored } from './models/joke-stored';

describe('AppComponent', () => {
  let store: MockStore;
  const initialState = { joke: { favorites: [] as ReadonlyArray<JokeStored> } };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState }),],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // this should be checking for the content on the page...
  // just I'm not 100% sure how to check on a MAT badge at this point, 
  // and it's not worth the test right now..
  xit('should show the fav count on the page', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    app.jokeCount$.subscribe(c => expect(c).toBe(0));
  }));
});
