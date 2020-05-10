import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class UserInMemoryService  implements InMemoryDbService{

  constructor() { }

  createDb(){

    const users =[
      
      {
        id : 1,
        uid: '1',
        firstName: 'Ramesh',
        lastName: 'Sam',
        dob: '21/11/1981',
        joinDate: '21/11/2020',
        stream: 'CSE',
        semester: 'SEM-II'
      },
      {
        id: 2,
        uid: '2',
        firstName: 'Veena',
        lastName: 'Paul',
        dob: '12/11/1999',
        joinDate: '12/10/2020',
        stream: 'CSE',
        semester: 'SEM-II'
      }
      ,
      {
        id: 3,
        uid: '3',
        firstName: 'Lia',
        lastName: 'James',
        dob: '05/11/1980',
        joinDate: '03/05/2020',
        stream: 'ECE',
        semester: 'SEM-III'
      },
      {
        id: 4,
        uid: '4',
        firstName: 'Peter',
        lastName: 'Li',
        dob: '07/14/1986',
        joinDate: '03/10/1999',
        stream: 'CSE',
        semester: 'SEM-II'
      }
    ];
    return {users};
  }

  genId<T extends {id : any}>(collection: T[],colletionName:string){
    return collection.reduce((prev,curr) => {
      return (curr.id +1) || 0;    
    },1);
  }
}
