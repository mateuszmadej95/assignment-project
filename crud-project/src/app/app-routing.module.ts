import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorComponent } from './components/author/author.component';
import { FormComponent } from './components/form/form.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: 'table/:itemId', component: ItemDetailsComponent, pathMatch: 'full' },
  { path: 'table/authors/:authorName', component: AuthorComponent, pathMatch: 'full' },
  { path: 'form', component: FormComponent, pathMatch: 'full' },
  { path: 'table', component: TableComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
