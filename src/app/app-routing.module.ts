import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { RegisterComponent } from './register/register.component';
import { ParentComponent } from './parent/parent.component'; 
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { RegisterDetailComponent } from './register/register-detail/register-detail.component';
import { ChildComponent } from './parent/child/child.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import {DatepickerPopupComponent} from './datepicker-popup/datepicker-popup.component';
import {NgForComponent } from './ng-for/ng-for.component';
import { CommonModule } from '@angular/common';
import { UsernamelistComponent } from './user/usernamelist/usernamelist.component';
import { UserlistComponent } from './user/userlist/userlist.component';
// import { JsonPipeComponent } from '../../angular2-demo/app/jsonpipe.component';
 
//{path:'user',component:UserComponent},
const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'employee-detail',component:EmployeeDetailComponent},
  {path:'register',component:RegisterComponent},
  {path:'register-detail',component:RegisterDetailComponent},
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent},
  {path:'two-way-bind',component:TwoWayBindComponent},
  {path:'users',component:UserComponent},
  {path:'user-detail',component:UserDetailComponent},
  {path:'edit/:id',component:UserDetailComponent},
  {path:'ng-for',component:NgForComponent},
  {path:'datepicker-popup' ,component:DatepickerPopupComponent},
  {path:'userlist' ,component:UserlistComponent},
  {path:'usernamelist' ,component:UsernamelistComponent} 
  , {path:'userRegister' ,component:UserDetailComponent} 
  

];
//const routes: Routes = [];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
