import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @ViewChild('f', {static: false}) signupForm:NgForm;
  defaultQuestion='pet';
  answer='';
  genders=['male','female'];


  constructor() { }

  ngOnInit() {
  }

  // onSubmit(form:ElementRef){
  //   // alert("Hi")
  //   console.log("ngSubmit works")
  // }
  // onSubmit(form:NgForm){
  //   // alert("Hi")
  //   console.log(form)
  // }

  onSubmit(){
    console.log(this.signupForm);
  }

  suggestUserName(){
    const suggestedName='Superuser';
    // this.signupForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:''
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'male'
    // });

    this.signupForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    })
  }
}
