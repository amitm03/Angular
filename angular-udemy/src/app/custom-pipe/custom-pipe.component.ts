import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'shorten'
})

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit,PipeTransform {

  constructor() { }

  ngOnInit() {
  }

  transform(value: any) {
      return value.substr(0,10);
  }
}
