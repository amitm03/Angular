import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strdata:string='Data from parent...';

  dataFromChild:string='';

  
  constructor() { }

  ngOnInit() {
  }

  onReceive(myevent){
    this.dataFromChild = myevent;
  }
}
