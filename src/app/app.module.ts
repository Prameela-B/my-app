import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { RegisterDetailComponent } from './register/register-detail/register-detail.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
//import { JsonPipeComponent } from 'angular2-demo/app/jsonpipe.component';
import {CommonModule} from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgForComponent } from './ng-for/ng-for.component';
import { Component, OnInit } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserlistComponent } from './user/userlist/userlist.component';
import { UsernamelistComponent } from './user/usernamelist/usernamelist.component'; 
import { UserService } from './dependencyInjection/user.service';
import {HttpClientModule} from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserInMemoryService } from './service/user-in-memory.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    DashboardComponent, EmployeeComponent, RegisterComponent, EmployeeDetailComponent,RegisterComponent,
     RegisterDetailComponent, 
     ParentComponent, ChildComponent, 
     TwoWayBindComponent, UserComponent, 
     UserDetailComponent, NgForComponent,
     NgForComponent,
     DatepickerPopupComponent,
     UserlistComponent,
     UsernamelistComponent  
     //,JsonPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,CommonModule, NgbModule,
    ReactiveFormsModule, BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(UserInMemoryService)
     
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
  
  
})
export class AppModule { }
