import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { JokeStored } from '../../models/joke-stored';
import { State, getFavoriteJokeList } from '../../state'

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit, OnDestroy, AfterViewInit {

  public displayedColumns: string[] = ['joke', 'date'];
  //public displayedColumns: string[] = ['id', 'joke', 'date'];

  private favUnsub!: Subscription ;

  @ViewChild(MatSort) sort!: MatSort;

  public dataSource = new MatTableDataSource<JokeStored>([]);

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.favUnsub = this.store.select(getFavoriteJokeList).subscribe(jks => {
      this.dataSource = new MatTableDataSource([...jks]);
    })
  }

  ngOnDestroy(): void {
    this.favUnsub.unsubscribe();
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
