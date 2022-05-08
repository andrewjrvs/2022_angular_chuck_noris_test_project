import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JokeComponent } from './joke.component';

describe('JokeComponent', () => {
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the joke on the body', () => {
    component.joke = {id: 123, joke: 'test joke body', categories: ['testing']};
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-card-content')?.textContent).toContain('test joke body');
    expect(compiled.querySelector('mat-card-title')?.textContent).toContain('123');
  })

  it('should disable the buttons processing input set', () => {
    component.joke = {id: 123, joke: 'test joke body', categories: ['testing']};
    component.processingAction = 'TESTING';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelectorAll<HTMLInputElement>('mat-card-actions > button').forEach(el => {
      expect(el?.disabled).toBeTruthy();
    })
  })

  it('should publish reject action when reject button pressed', () => {
    component.joke = {id: 123, joke: 'test joke body', categories: ['testing']};
    fixture.detectChanges();
    spyOn(component.action, 'emit');

    const compiled = fixture.nativeElement as HTMLElement;

    compiled.querySelectorAll<HTMLInputElement>('mat-card-actions > button')[1].click();
    expect(component.action.emit).toHaveBeenCalledOnceWith('REJECT');
  })

  it('should publish reject action when reject button pressed', () => {
    component.joke = {id: 123, joke: 'test joke body', categories: ['testing']};
    fixture.detectChanges();
    spyOn(component.action, 'emit');

    const compiled = fixture.nativeElement as HTMLElement;

    compiled.querySelectorAll<HTMLInputElement>('mat-card-actions > button')[0].click();
    expect(component.action.emit).toHaveBeenCalledOnceWith('KEEP');
  })

});
