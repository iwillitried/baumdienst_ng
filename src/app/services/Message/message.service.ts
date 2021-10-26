import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import {Broadcast} from "../../enums/Broadcast.enum";


@Injectable({ providedIn: "root" })
export class MessageService {
  private subject = new Subject<Broadcast>();

  sendMessage(message: Broadcast): void {
    this.subject.next(message);
  }

  clearMessages(): void {
    this.subject.next();
  }

  onMessage(): Observable<Broadcast> {
    return this.subject.asObservable();
  }
}
