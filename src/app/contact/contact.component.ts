import { Component, OnInit } from '@angular/core';

import {Contact} from "./contact";
import {ContactStoreService} from "../contact-store.service";
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from "@angular/forms";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  contacts: Array<Contact>;
  constructor(){}
 /* constructor(private contactService: ContactStoreService,private formBuilder: FormBuilder) {
    /!*this.form = formBuilder.group({
      'firstName': formBuilder.control('',Validators.required),
      'lastName': formBuilder.control('',Validators.required),
      'email': formBuilder.control('',Validators.required),
      'phone': new FormArray()
    });*!/
  }*/
  //contact: Contact;

  ngOnInit(){

    this.form = new FormGroup({
      'firstName': new FormControl('',[Validators.required]),
      'lastName': new FormControl('',[Validators.required]),
      'email': new FormControl('',[Validators.required]),
      'phone': new FormArray([ContactComponent.getContactFormGroup()])
    });

    //this.contact = new Contact('','','','');

    //this.loadContacts();
  }
  private  static getContactFormGroup(){
    return new FormGroup({
      'number':new FormControl('',[Validators.required]),
      'type':new FormControl('',[Validators.required])
    });
  }
  addNumbers(){

    this.form.get('phone').push(ContactComponent.getContactFormGroup());
  }
  onSubmit(){
    console.log(this.form);
   /* this.contactService.insertContact(this.form.value);
    this.loadContacts();*/
  }
  removeNumber(i){
    this.form.get('phone').removeAt(i);
  }

  loadContacts() {
    this.contacts = this.contactService.getContactList();
  }


}
