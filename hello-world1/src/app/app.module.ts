import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee.component';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    DepartmentComponent,
    StringInterpolationComponent,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,EmployeeComponent]
})
export class AppModule { }
