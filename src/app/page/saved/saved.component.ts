import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map, Subscription } from 'rxjs';
import { NorisJoke } from 'src/app/models/noris-joke';
import { NorisJokeFavsService } from 'src/app/noris-joke-favs.service';

interface tableList extends NorisJoke {
  date: Date
}

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit, OnDestroy, AfterViewInit {

  public displayedColumns: string[] = ['joke', 'date'];
  //public displayedColumns: string[] = ['id', 'joke', 'date'];

  private favUnsub: Subscription ;

  @ViewChild(MatSort) sort!: MatSort;

  public dataSource = new MatTableDataSource<tableList>([]);

  constructor(private favSrv: NorisJokeFavsService) {
    // breaks out the tuple from the fav list, into a tableList
    this.favUnsub = this.favSrv.list$.pipe(
      map(tl => tl.map(t => {return { ...t[0], date: (t[1]) }}))
    ).subscribe(ds => this.dataSource = new MatTableDataSource(ds));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.favUnsub.unsubscribe();
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
