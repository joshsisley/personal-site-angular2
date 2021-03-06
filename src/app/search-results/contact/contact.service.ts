import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
export interface IMessage {
  name?: string,
  email?: string,
  message?: string
}
 
@Injectable()
export class ContactService {
  private emailUrl = './assets/email.php';
 
  constructor(private http: HttpClient) {
 
  }
 
  sendEmail(message: IMessage): Observable<IMessage> | any {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.emailUrl, message)
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        let array = [error.status];
        return array;
      })
  }
}