import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../../../services/Message/message.service';
import {Broadcast} from '../../../../enums/Broadcast.enum';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  FormData: FormGroup;

  constructor(private messageService: MessageService,
              private builder: FormBuilder) {
    this.FormData = this.builder.group({});
  }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required])
    });
  }

  setHeaderTo(value: string): void {
    if (value === 'inverted') {
      this.messageService.sendMessage(Broadcast.INVERT_HEADER_COLOR);
    } else if (value === 'default') {
      this.messageService.sendMessage(Broadcast.DEFAULT_HEADER_COLOR);
    }
  }

  onSubmit(value: any): void {

  }
}
