import { Component, Input } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrl: './person-item.component.css'
})
export class PersonItemComponent {
  @Input('person') person: Person | null = null;
}
