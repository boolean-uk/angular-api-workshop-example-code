import { Injectable, inject } from '@angular/core';
import { Person } from '../models/person';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  http = inject(HttpClient)
  people: any;

  async getPeople() {
    const result = await firstValueFrom(this.http.get(`${environment.apiUrl}/people`));
    // @ts-ignore
    this.people = result.results;
    return this.people;
  }


  // get people() : Promise<Person[]> {
  //   const somePeople = fetch(`${environment.apiUrl}/people`)
  //   .then((res) => res.json())
  //   .then((result) => result.results);
  //   return somePeople;
  // }

  // people: Person[] = [
  //   {
  //     uid: "100",
  //     name: "Darth Maul",
  //     url: "Some URL"
  //   },
  //   {
  //     uid: "200",
  //     name: "Emperor Palpatine",
  //     url: "Some other url"
  //   }
  // ]
}
