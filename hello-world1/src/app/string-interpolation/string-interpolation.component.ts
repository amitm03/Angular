import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  name:string="Amit Mishra";

  num1:number=3;

  imgUrl="../../assets/mountain.jpg";
  
  constructor() { }

  ngOnInit() {
  }

}
