import { Injectable, inject } from '@angular/core';
import { Person } from '../models/person';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  http = inject(HttpClient);

  get people(): Promise<Person[]> {
    // @ts-ignore
    return firstValueFrom(this.http.get(`${environment.apiUrl}/people`));
  }

  async addPerson(name: string, description: string): Promise<Person> {
    const person = await firstValueFrom(this.http.post(`${environment.apiUrl}/people`, { name: name, description: description }));
    // @ts-ignore
    return person;
  }

}
