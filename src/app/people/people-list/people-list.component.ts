import { Component, inject } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent {
  peopleService = inject(PeopleService);
  
  people: any;

  async ngOnInit() {
    this.people = await this.peopleService.people;
  }
}
