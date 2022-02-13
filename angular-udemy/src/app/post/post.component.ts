import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  PostArr:any[]=[];

  constructor(private srvice:HttpService) { }

  ngOnInit() {
    this.GetAllPost();
  }

  GetAllPost(){
    this.srvice.getPost().subscribe((response)=>{
      this.PostArr = (<any>response);
    })
  }
}
