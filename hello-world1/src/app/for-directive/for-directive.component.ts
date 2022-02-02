import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {

  arrobj=[
    {
      name:"Motorolla",
      price:30000,
      quantity:1
    },
    {
      name:"OnePlus",
      price:35000,
      quantity:2
    },
    {
      name:"RealMe",
      price:20000,
      quantity:3
    }
  ];

  selected:string='';

  constructor() { }

  ngOnInit() {
  }

  onMouseOver(item){
    console.log("Mouse over event occur...")
    this.selected = item.name;
  }

  onMouseOut(){
    console.log("===>>> Mouse out Event occured...")
    this.selected='';
  }
}
