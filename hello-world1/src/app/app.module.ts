import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee.component';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { Eventbinding1Component } from './eventbinding1/eventbinding1.component';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { ForDirectiveComponent } from './for-directive/for-directive.component';
import { EventBinding2Component } from './event-binding2/event-binding2.component';
import { FormsModule } from '@angular/forms';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ParentComponent } from './parent/parent.component';
import { InbuildPipeComponent } from './inbuild-pipe/inbuild-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    DepartmentComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    Eventbinding1Component,
    IfdirectiveComponent,
    ForDirectiveComponent,
    EventBinding2Component,
    SwitchdirectiveComponent,
    Child1Component,
    Child2Component,
    ParentComponent,
    InbuildPipeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,EmployeeComponent]
})
export class AppModule { }
