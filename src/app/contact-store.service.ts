import { Injectable } from '@angular/core';
import { Contact } from './contact/contact';

@Injectable()
export class ContactStoreService {

  contactList: Array<Contact> = [];
  constructor() { }

  insertContact(value){
    this.contactList.push(value);
  }

  getContactList():any {
    console.log(this.contactList);
    return this.contactList;
  }

}
