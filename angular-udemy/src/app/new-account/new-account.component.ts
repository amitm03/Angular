import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../loggin.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService,AccountService]
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingService:LoggingService,private accountService:AccountService) {

  }

  ngOnInit() {
  }

  // @Output() accountAdded=new EventEmitter<{name:string,status:string}>();

  onCreateAccount(accountName:string,accountStatus:string){
    // this.accountAdded.emit({
    //   name:accountName,
    //   status:accountStatus
    // })

    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    // console.log('A server status changed , new status :'+accountStatus)
    this.accountService.addAccount(accountName,accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
