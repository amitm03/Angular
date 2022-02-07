import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-pipesexample',
  templateUrl: './pipesexample.component.html',
  styleUrls: ['./pipesexample.component.css']
})

@Pipe({
  name:'shorten'
})

export class PipesexampleComponent implements OnInit,PipeTransform {
  appStatus=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('stable')
    },2000)
  });

  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];

  

  constructor() { }

  ngOnInit() {
  }

  filteredStatus='';

  getStatusClass(server:{instanceType:string,name:string,status:string,started:Date}){
    return{
      'list-group-item-success':server.status==='stable',
      'list-group-item-warning':server.status==='offline',
      'list-group-item-danger':server.status==='critical'
    };
  }

  transform(value: any) {
    return value.substr(0,10)+'....';
  }

  onAddServer(){
    this.servers.push({
      instanceType:'small',
      name:'New Server',
      status:'stable',
      started:new Date()
    });
  }
 
}
