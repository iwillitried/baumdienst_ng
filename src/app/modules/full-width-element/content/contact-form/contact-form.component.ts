import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../../../services/Message/message.service';
import {Broadcast} from '../../../../enums/Broadcast.enum';
import {FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {ContactService} from '../../../../services/Contact/contact.service';
import {EmailState} from './EmailState.enum';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {
  FormData: FormGroup;
  emailState: EmailState = EmailState.ready;
  EmailState = EmailState;

  constructor(private messageService: MessageService,
              private builder: FormBuilder,
              private contact: ContactService) {
    this.FormData = this.builder.group({});
  }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email]) as ValidatorFn]),
      message: new FormControl('', [Validators.required]),
      tel: new FormControl('', [])
    });
  }

  setHeaderTo(value: string): void {
    if (value === 'inverted') {
      this.messageService.sendMessage(Broadcast.INVERT_HEADER_COLOR);
    } else if (value === 'default') {
      this.messageService.sendMessage(Broadcast.DEFAULT_HEADER_COLOR);
    }
  }

  setEmailStateToReady(after: number = 0): void {
    setTimeout(() => this.emailState = EmailState.ready, after);
  }

  resetForm(): void {
    this.FormData.reset();
    // tslint:disable-next-line:forin
    for (let key in this.FormData.controls) {
      const control = this.FormData.controls[key];

      control.markAsPristine();
      control.markAsUntouched();
      control.setErrors(null);

    }
  }

  onSubmit(FormData: FormGroup): void {
    if ((FormData as any).email === 'iwannabe@mcdonalds.de') {
      window.location.href = 'https://www.mcdonalds.de';
      return;
    }
    this.emailState = EmailState.sending;

    this.contact.postMessage(FormData)
      .subscribe({
        next: resp => {
          this.resetForm();
          this.setEmailStateToReady(20000);
          this.emailState = EmailState.done;
          console.log('Mail sent! API response: ');
          console.log(resp);
        },
        error: error => {
          this.resetForm();
          this.emailState = EmailState.error;
          this.setEmailStateToReady(5000);
          console.error('There was an error!', error);
        }
      });
  }

}
