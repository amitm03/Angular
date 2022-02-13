import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService{

    private url:string = "https://jsonplaceholder.typicode.com/posts";

    constructor(private http:HttpClient){

    }

    getPost(){
        return (this.http.get(this.url))
    }
}