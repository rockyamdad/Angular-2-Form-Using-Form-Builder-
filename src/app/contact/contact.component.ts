import { Component, OnInit } from '@angular/core';

import {Contact} from "./contact";
import {ContactStoreService} from "../contact-store.service";
import {FormBuilder, FormGroup,  Validators} from "@angular/forms";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  contacts: Array<Contact>;
  constructor(private contactService: ContactStoreService,private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      'firstName': formBuilder.control('',Validators.required),
      'lastName': formBuilder.control('',Validators.required),
      'email': formBuilder.control('',Validators.required),
      'phone': formBuilder.control('')
    });
  }
  //contact: Contact;

  ngOnInit():any {


    //this.contact = new Contact('','','','');

    this.loadContacts();
  }
  onSubmit(){
    this.contactService.insertContact(this.form.value);
    this.loadContacts();
  }

  loadContacts() {
    this.contacts = this.contactService.getContactList();
  }


}
