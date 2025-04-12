import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  faRightFromBracket,
  faMailBulk,
} from '@fortawesome/free-solid-svg-icons';
import { AnimationDirective } from '../animations/animation.directive';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contactme',
    imports: [AnimationDirective, TranslateModule, FormsModule],
    templateUrl: './contactme.component.html',
    styleUrls: [
        './contactme.component.scss',
        './contactme-responsive.component.scss',
    ]
})
export class ContactmeComponent implements OnInit {
  faRightFromBracket = faRightFromBracket;
  faMailReply = faMailBulk;
  name: string;
  text: string;
  email: string;

  @Output() form_submitted = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onSubmit(form: any) {
    const formData = {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message,
    };

    alert('Your message has been sent!');
  }
}
