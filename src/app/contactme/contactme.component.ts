import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { FirestoreModule } from '@angular/fire/firestore';
import { Firestore } from '@angular/fire/firestore/firebase';
import { faRightFromBracket, faMailBulk} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss','./contactme-responsive.component.scss']
})
export class ContactmeComponent implements OnInit {

  faRightFromBracket=faRightFromBracket
  faMailReply=faMailBulk
  name:string
  text:string
  email:string

  @Output() form_submitted= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    const formData = {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    };

    alert('Your message has been sent!');  
  }

}
