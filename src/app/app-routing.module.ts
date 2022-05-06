import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewComponent } from './page/review/review.component';
import { SavedComponent } from './page/saved/saved.component';

const routes: Routes = [
  {path: 'review', component: ReviewComponent},
  {path: 'saved', component: SavedComponent},
  {path: '', redirectTo: '/review', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
