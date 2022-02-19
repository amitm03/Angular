import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contactMethod:any[]=[
    {id:1,name:'Email'},
    {id:2,name:'Phone'},
    {id:3,name:'Office Phone'},
  ];

  EMAIL_PATTER="^[_A-Za-z0-9-\\]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  onSubmit(f:NgForm){
    console.log("Username :"+f.value.username)
    console.log("Radio button :"+f.value.con)
  }
}
