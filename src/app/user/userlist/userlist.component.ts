import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/dependencyInjection/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor(private userService : UserService) { }

  
  //----------Form for userName-----------------------
  userList: any[] =[];
  //@Output() addUser = new EventEmitter<string>();

  ngOnInit() {
    // if(this.userService.userList.length !=0)
    // {
    this.userList = this.userService.userList;
   // }
  }
  //-------------------------------
 
  pushUserList(user: string) {
   // alert('pushUserList:'+user)
    this.userList.push(user);
  }
 remove(index:number)
 {
   this.userService.remove(index);
 }

}
