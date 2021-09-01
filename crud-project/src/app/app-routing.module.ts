import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  // { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'form', component: FormComponent, pathMatch: 'full' },
  { path: 'table', component: TableComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
