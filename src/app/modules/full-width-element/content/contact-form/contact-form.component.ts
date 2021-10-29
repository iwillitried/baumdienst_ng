import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../../../services/Message/message.service';
import {Broadcast} from '../../../../enums/Broadcast.enum';

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"]
})
export class ContactFormComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  setHeaderTo(value: string): void {
    if (value === "inverted") {
      this.messageService.sendMessage(Broadcast.INVERT_HEADER_COLOR);
    } else if (value === "default") {
      this.messageService.sendMessage(Broadcast.DEFAULT_HEADER_COLOR);
    }
  }

}
