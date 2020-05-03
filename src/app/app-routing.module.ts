import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { BrowseComponent } from './browse/browse.component';


const routes: Routes = [
  { path: '', redirectTo: '/browse', pathMatch: 'full' },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'browse', component: BrowseComponent },    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
