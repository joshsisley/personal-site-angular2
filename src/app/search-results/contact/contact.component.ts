import { Component,OnInit } from '@angular/core';
import { ContactService, IMessage } from './contact.service';

@Component({
  selector: 'contact-tab',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit { 

  message: IMessage = {};
  success:boolean = false;

  constructor(private appService: ContactService) {
 
  }

	ngOnInit() {
		
  }

  sendEmail(message: IMessage) {
    this.appService.sendEmail(message).subscribe((res:any) => {
      console.log('AppComponent Success', res);
      this.success = true;
      this.message = {};
    }, (error:any) => {
      if (error[0] == 200) {
        this.message = {
          name: '',
          email: '',
          message: ''
        };
        this.success = true;
      } else {
        console.log('AppComponent Error', error);
      }
    })
  }
  
}