import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private API = window.location.origin + '/api/v1/email';
  private BEARER_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMmQ3MTc5ZGI2MWFjNzI3YTMzMmFkMmRkNTE5MjlhNjU0YjRmM2RhNzNkMDAzNjI2YmUwMGI5ZWUzMmNhNDBhMjY0MjQ3ZWIyNDgwMTkyODkiLCJpYXQiOjE2NDE1NjMzMTEuNzIzODg3LCJuYmYiOjE2NDE1NjMzMTEuNzIzODkyLCJleHAiOjQ3OTcyMzY5MTEuNjY5OTM5LCJzdWIiOiIxODQzMCIsInNjb3BlcyI6WyJlbWFpbF9mdWxsIl19.Spbs0TpzfJlGSw4PTqYXP6n90Pw1D0hZCX_mNvEsVogGaK9Cw08OY2B7BleUAL0sgE_1S_qf9t2ol1n1-ZVF_Z_IhzvH7aeaMGx4J9zLs93w7FZnuIwFEdAvuKFZFcSn_A04ZDWi35MROSylWgqj64gE7O1BIlTGsxcMc02JZK9PYubpGgRbnmC5PMxPQNwj6vKAcRwnolJg4Xxar126FXg8T-1te9stWYWn4we3oITGgR367zidnmQGb28jOA_myC23OQa_xNV2hgomjHM6gSDg813nN6CwVwm1WFOLto05xpWGButYLiVbDMktC4qcjq65SzZXXWyNb2cEzBg9AAP8b3uqOoIjDYXMoTH7ylMj6hwD_apmcS9vWK2TPbMGbOsFp4O81oh3ZvvBimtKMMmpZsbuhCH4sHivCRjPkIWVKgKeAtt4-F_0dMNE_SBZ39ix8zS8ZPK8ml9YYHut_Mv9n12hHrm2SOOVsq6bsVgqr_Cx0TuRFBKxVZLa364XVWaRgkXJRJpbQYDbF-xosslFQmzSM1kdUa_iHfkwjfe0RtfBsBUdahshS5Bn_7HNqj43O1Ui1m81kb6h4UVdMrIVhlhTdue83VPTCNDOgnEAd6o1VC0u3stIAy_cFdrKqVPLro5JTBHOUVyl5qD7P8p6yxWVh_GXSqTde2a-Hgs';

  constructor(private http: HttpClient) {

  }

  postMessage(input: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${this.BEARER_TOKEN}`
    });

    const senderName = input.name || '[Unbekannt]';
    const senderEmail = input.email || '[Keine E-Mail Adresse]';
    const senderMessage = input.message || '[Keine Nachricht]';
    const senderTel = input.tel || '[Keine Telefonnummer]';

    const mail: any = {
      'from': {
        'email': 'info@baumdienst-neuwied.de',
        'name': 'Website Anfrage - Baumdienst Neuwied'
      },
      'to': [
        {
          'email': 'info@baumdienst-neuwied.de',
          'name': 'Baumdienst Neuwied'
        }
      ],
      'subject': `Kontaktanfrage von ${senderName}`,
      'text': `${senderName} schrieb:\n ${senderMessage} \n\n Kontaktdaten: \n Name: ${senderName} \n E-Mail: ${senderEmail} \n Tel.: ${senderTel}`
    };

    return this.http.post(this.API, JSON.stringify(mail), {headers, responseType: 'text'});
  }


}








