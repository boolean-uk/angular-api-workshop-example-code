import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonItemComponent } from './person-item/person-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PeopleListComponent, PersonItemComponent, AddComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, ReactiveFormsModule],
  exports: [PeopleListComponent, AddComponent],
})
export class PeopleModule {}
