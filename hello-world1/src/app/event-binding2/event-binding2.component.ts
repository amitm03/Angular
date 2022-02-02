import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {

  result:number;
  myname:string='';


  constructor() { }

  ngOnInit() {
  }

  onAddition(num1,num2){
    let n1=+num1;
    let n2=+num2;

    this.result=n1+n2;
  }

  onChange(name){
    console.log("Change event occur...")
    name.style.background='green';
    name.style.color='white';
  }

  onKeyUp(){
    console.log("Key up event occur....")
  }

  onKeyDown(){
    console.log("Key down Event occur...")
  }
}
