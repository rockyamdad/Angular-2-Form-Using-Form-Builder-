import { Component } from '@angular/core';
import {ContactStoreService} from "./contact-store.service";
import {FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ContactStoreService,FormBuilder],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
