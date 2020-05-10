import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { UserService } from 'src/app/dependencyInjection/user.service';
 

@Component({
  selector: 'app-usernamelist',
  templateUrl: './usernamelist.component.html',
  styleUrls: ['./usernamelist.component.scss']
})
export class UsernamelistComponent implements OnInit {
   //isVisibleFlagUN = false;
  userName: string; 
  
  //@Output() addUser = new EventEmitter<string>();

  constructor(private userService: UserService) { }
  isVisibleFlagUN = this.userService.isVisibleFlag;
  ngOnInit(): void {
  }
//-------------------------------Addusername code
onAddUserNameFlag(){
  this.isVisibleFlagUN = !this.isVisibleFlagUN;
}
onSubmit()
{
  this.userService.onAddUser(this.userName);
  this.isVisibleFlagUN = this.userService.isVisibleFlag;
  // if(t)his.userName.length!= 0)
  // {
  alert('isVisibleFlagUN:'+this.isVisibleFlagUN +'\n' + 'ServiceisVisibleFlagUN:'+this.userService.isVisibleFlag);''
  //   this.addUser.emit(this.userName);
  //  // this.uName = '';
  // }
  

}
}
