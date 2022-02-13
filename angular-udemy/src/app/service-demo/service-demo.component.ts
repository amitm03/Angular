import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../loggin.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit {

  constructor(private logginService:LoggingService) { }

  ngOnInit() {
  }

}
