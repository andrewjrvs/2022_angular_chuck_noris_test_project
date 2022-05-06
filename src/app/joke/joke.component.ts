import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NorisJoke } from '../models/noris-joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  @Input()
  public joke!: NorisJoke

  @Output()
  public action = new EventEmitter<"KEEP" | "REJECT">();

  @Input()
  public processingAction: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public keep_OnClick(): void {
    this.action.emit("KEEP");
  }

  public reject_OnClick(): void {
    this.action.emit("REJECT");
  }
}
