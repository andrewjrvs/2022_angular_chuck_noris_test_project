import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Joke } from '../../models/joke';
import { JokeStored } from '../../models/joke-stored';
import * as JokeActions from '../../state/joke.actions';

import { ReviewComponent } from './review.component';

describe('ReviewComponent', () => {
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;
  let store: MockStore;
  const initialState = { joke: { activeJoke: undefined} };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState }),],
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it(`should call save on a KEEP action`, waitForAsync(() => {
    const tstJoke: Joke = {id: 1, joke: 'Testing', categories: ['test']};
    const dispatchSpy = spyOn(store, 'dispatch');
    let cntDis = 0;
    dispatchSpy.and.callFake(action => {
      cntDis ++;
      if (cntDis === 1) {
        // don't like this test, but for now, well, just check the type
        expect(action.type).toEqual(JokeActions.addFavorite({ joke: ({} as JokeStored) }).type)
      } else if (cntDis === 2) {
        expect(action.type).toEqual(JokeActions.loadJoke().type);
      }
    })

    component.process_action(tstJoke, 'KEEP');
    
    expect(store.dispatch).toHaveBeenCalledTimes(2);
  }));

  it(`should not save on a reject action`, waitForAsync(() => {
    const tstJoke: Joke = {id: 1, joke: 'Testing', categories: ['test']};
    const dispatchSpy = spyOn(store, 'dispatch');
    let cntDis = 0;
    dispatchSpy.and.callFake(action => {
      expect(action.type).toEqual(JokeActions.loadJoke().type);
    })

    component.process_action(tstJoke, 'REJECT');
    
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  }));


});
