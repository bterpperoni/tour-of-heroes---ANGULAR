import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  /*
    Injection declaration must be 'public' because it must remain accessible.
    Angular only binds to public component properties.
  */
  constructor(public messageService: MessageService) {}

}
