import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

interface Contact {
  id: number;
  type: string;
  firstName: string;
  lastName: string;
  email: string;
  description: string;
  phone: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hello-angular'; // You can keep the existing title

  listContacts: Array<Contact> = new Array<Contact>();

  ngOnInit() {
    this.createContact();
  }

  createContact() {
    for (let i = 0; i < 6; i++) {
      const contact: Contact = {
        id: i,
        type: this.getRandomType(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        description: this.getRandomDescription(),
        phone: faker.phone.phoneNumberFormat(),
      };
      this.listContacts.push(contact);
    }
  }

  private getRandomType(): string {
    const types = ['Work', 'Family', 'Friend'];
    const randomIndex = Math.floor(Math.random() * types.length);
    return types[randomIndex];
  }

  private getRandomDescription(): string {
    const descriptions = ['Travail', 'Famille', 'Amis'];
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    return descriptions[randomIndex];
  }
}
