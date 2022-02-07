import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {
  strdata:string='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at consequat quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';
  num2:number = 456.123789456;

  mydate = new Date();

  constructor() { }

  ngOnInit() {
  }

}
