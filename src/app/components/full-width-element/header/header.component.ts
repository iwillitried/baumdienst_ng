import {Component, HostListener, OnInit, ViewChild} from "@angular/core";
import {MessageService} from "../../../services/Message/message.service";
import {Broadcast} from '../../../enums/Broadcast.enum';
import {Subscription} from 'rxjs';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  coloredLogoURL = "./assets/logo/Logo _Colored.svg";
  whiteLogoURL = "./assets/logo/Logo_white.svg";
  public logoUrl: string;
  isFixed = false;
  subs: Subscription;
  invertedHeader: boolean;


  constructor(private messageService: MessageService
  ) {
    this.logoUrl = this.coloredLogoURL;
    this.invertedHeader = false;
    this.subs = this.messageService.onMessage().subscribe(message => {
      if (message === Broadcast.INVERT_HEADER_COLOR) {
        this.invertedHeader = true;
        this.logoUrl = this.whiteLogoURL;
      } else if (message === Broadcast.DEFAULT_HEADER_COLOR) {
        this.invertedHeader = false;
        this.logoUrl = this.coloredLogoURL;
      }
    });
  }


  ngOnInit(): void {

  }

}
