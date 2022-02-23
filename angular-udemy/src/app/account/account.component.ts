import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../loggin.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService,AccountService]
})
export class AccountComponent implements OnInit {

  constructor(private loggingService:LoggingService,private accountService:AccountService) { }

  ngOnInit() {
  }

  @Input() account:{name:string,status:string}
  @Input() id:number
  // @Output() statusChanged = new EventEmitter<{id:number,newStatus:string}>();

  onSetTo(status:string){
    // this.statusChanged.emit({id:this.id,newStatus:status})
    // console.log('A server status changed '+status)
    this.accountService.updateStatus(this.id,status);
    this.loggingService.logStatusChange(status)
  }
}
