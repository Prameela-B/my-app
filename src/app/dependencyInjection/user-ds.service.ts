import { Injectable } from '@angular/core';
import { UserDetailsData } from '../user/UserDetailsData.model'; 

@Injectable({
  providedIn: 'root'
})

export class UserDSService {

  // userdetail page----------------

  userList: UserDetailsData[] = [];
  isVisibleFlag = false;

  // userSlist : any = {};
  //---------------------------
  //apiUrl = '/api/users';
  userList2: { uid: string; firstName: string; lastName: string; dob: string; joinDate: string; stream: string; semester: string; }[];
  //-----------------------------------

  constructor() {
    // below not used for api
    this.userList = [
      {
       // uid: '1',
        firstName: 'Ramesh',
        lastName: 'Sam',
        dob: '21/11/1981',
        joinDate: '21/11/2020',
        stream: 'CSE',
        semester: 'SEM-II'
      },
      {
        //uid: '2',
        firstName: 'Veena',
        lastName: 'Paul',
        dob: '12/11/1999',
        joinDate: '12/10/2020',
        stream: 'CSE',
        semester: 'SEM-II'
      }
      ,
      {
        //uid: '3',
        firstName: 'Lia',
        lastName: 'James',
        dob: '05/11/1980',
        joinDate: '03/05/2020',
        stream: 'ECE',
        semester: 'SEM-III'
      },
      {
        //uid: '4',
        firstName: 'Peter',
        lastName: 'Li',
        dob: '07/14/1986',
        joinDate: '03/10/1999',
        stream: 'CSE',
        semester: 'SEM-II'
      }
    ];
    // alert(this.userList.length);
  }

  // onAddUser(userListD: UserDetailsData) {
  //  // alert("Before Push : " + this.userList.length);
  //   this.userList.push(userListD);
  //   // alert("From onAddUser Service Push : " + this.userList.length);
  //   this.isVisibleFlag = false;
  // }
  onAddUser(userListD: UserDetailsData) {

    this.userList.push(userListD);
    this.isVisibleFlag = false;
  }
  onDeleteUser(index: number) {
    //alert(' splice/'+index);
    this.userList.splice(index, 1);
  }



  onEditUser(user: UserDetailsData, index: number) {
    alert("Editing at My Service for: " + index +"\n" + user.firstName); 

    this.userList[index] = user;
  }
  getUser(index: number) {
    return this.userList[index];
  }


  //working code before example.
  // onSubmit() {
  //   this.myService.onAddUser(this.user);
  //   this.nameChange.emit(this.user);
  // }

  // Code worked before ROuterlink test
  // onSubmit(userData: UserDetailsData) {
  //   // this.userList = name;
  //   this.userList.push(userData); // working code 

  //   alert('onSubmit from Service:\n'+userData.uid +'\n'+userData.firstName+'\n'+userData.lastName)
  //   //this.onAddUser(userData);
  //   this.isVisibleFlag = false;       
  // }

}


