import { Component, inject } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  peopleService = inject(PeopleService);
  router = inject(Router);
  personForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.personForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addPerson() {
    this.peopleService.addPerson(this.personForm.value.name, this.personForm.value.description);
    this.router.navigate(["people"])
  }
}

