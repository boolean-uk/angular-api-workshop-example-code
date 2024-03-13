import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { AddComponent } from './people/add/add.component';

const routes: Routes = [
  {path: "people", component: PeopleListComponent},
  {path: "add", component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
