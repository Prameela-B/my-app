import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbDate, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { User } from './User';
import { UserDetailsData } from './UserDetailsData.model';
import { UserDSService } from 'src/app/dependencyInjection/user-ds.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']

})
//,providers:[UserDSService]
export class UserComponent implements OnInit {

  //isVisibleFlag = false;


  //isVisibleFlagUN = false;
  //@Input()  userData:{};
  //user : any = {};


  //user: User;
  // correct//  userList : any ={}; 

  userList: UserDetailsData[] = [];
  // userD : UserDetailsData[] = [
  //   {
  //     id: 1,
  //     firstName: 'Prameela',
  //     lastName: 'Bokinala',
  //     dob: '21/11/1981',
  //     joinDate: '21/11/2020',
  //     stream: 'CSE',
  //     semester: 'SEM-II'
  //   },
  //   {
  //     id: 2,
  //     firstName: 'Rani',
  //     lastName: 'Kokila',
  //     dob: '12/11/1999',
  //     joinDate: '12/10/2020',
  //     stream: 'CSE',
  //     semester: 'SEM-II'
  //   }
  // ]; // get this from user-ds service

  isVisibleFlag: boolean;

  constructor(private myService: UserDSService) {

    // this.userList = this.myService.userList;   
    // this.userList = this.myService.userList;
    //  this.isVisibleFlag = !this.myService.isVisibleFlag;
    // alert("Flag from Construtor isVisibleFlag:"+this.isVisibleFlag) +"\n List values:" + this.userList.length;
    // 
  }

  ngOnInit(): void {
    //this.userList= [];// coorect
    this.userList = this.myService.userList;
    this.isVisibleFlag = !this.myService.isVisibleFlag;
    // alert(`myService Flag:${this.myService.isVisibleFlag} \n Initialising isVisibleFlag:${this.isVisibleFlag}  \n List values:${this.userList.length}`);
  }

  onSubmit(userData: UserDetailsData) {
    // //   // this.userList = name;
    // alert('onSubmit clicked!!'+userData.firstName)
    // this.myService.userList.push(userData); // working code 
    this.myService.onAddUser(userData);
    //  alert(this.myService.userList.length);
    //this.isVisibleFlag = false;       
  }

  onEditUser(index: number) {

  }
  // from UserDSService -- remove
  onDeleteUser(index: number) {
    this.myService.onDeleteUser(index);
  }
  onAddUser(index: number) {

  }
  // routerLink coding so commenting this below
  // onAddUser() {
  //    //alert('OnAddUser clicked!!:'+this.isVisibleFlag +" // "+ !this.isVisibleFlag);
  //    //this.isVisibleFlag = !this.myService.isVisibleFlag;
  //   //this.myService.isVisibleFlag = true;
  //   alert("Flag from Service: " +this.myService.isVisibleFlag );
  //   this.isVisibleFlag =this.myService.isVisibleFlag;
  //   alert("Flag from Service to User page: " +  this.isVisibleFlag);
  //  }


  // code in userdsservice
  // onAddUser() {
  //   //alert('OnAddUser clicked!!:'+this.isVisibleFlag +" // "+ !this.isVisibleFlag);
  //   this.isVisibleFlag = !this.myService.isVisibleFlag;
  // }

  // onSubmit(user: User) {
  //   //this.userData = user;
  //   this.userList=this.user;
  //   this.isVisibleFlag = false;
  // }
}
