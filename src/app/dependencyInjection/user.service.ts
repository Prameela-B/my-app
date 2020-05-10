import { Injectable } from '@angular/core'; 

// @Injectable({
//   providedIn: 'root'
// })
export class UserService {
//usernamelist------------------
  userList : any[] = [];
 
  isVisibleFlag = false;
  //------------------------end

  


  constructor() { 
    this.userList= ['Hi','There','This','is', 'working'];  //usernamelist page
    

  }
  onAddUser(userName:string)
  {
    if(userName.length!= 0)
    {
      //alert('UN/UserName:'+this.userName);
      this.userList.push(userName);
     // this.uName = '';
     this.isVisibleFlag = false;
     console.log(this.userList);
     console.log(this.isVisibleFlag);
    }
  }
  remove(index: number) {
    //alert(' splice/'+index);
    this.userList.splice(index,1);
 }

 //-------------------------------end usernamelist page
 

}
