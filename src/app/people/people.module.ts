import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonItemComponent } from './person-item/person-item.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PeopleListComponent, PersonItemComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [PeopleListComponent],
})
export class PeopleModule {}
