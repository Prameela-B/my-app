import { Component, OnInit, Input, Output, Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule, NgbDate } from '@ng-bootstrap/ng-bootstrap';
//import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
//import {User} from '../User';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Semester } from '../Semester.model';
import { Stream } from '../Stream.model';
import { UserDetailsData } from '../UserDetailsData.model';
import { UserDSService } from 'src/app/dependencyInjection/user-ds.service';
import { Router, ActivatedRoute } from '@angular/router';

//import{CustomDateParserFormatter} from '../../datepicker-adapter'
// **
//  * This Service handles how the date is represented in scripts i.e. ngModel.
//  */
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '/';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  }
}


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will want to provide your main App Module  useClass: CustomAdapter
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    {
      provide: NgbDateParserFormatter,
      useClass: CustomDateParserFormatter
    }
    //,{provide:UserDSService}
  ]
})
//providers:[UserDSService]
export class UserDetailComponent implements OnInit {
  Dtoday: number = Date.now();
  model: string;

  userList: UserDetailsData[] = [];

  //user: UserDetailsData[] =[];// 

  user :UserDetailsData;
  id: number;
  isUpdateMode = false;
  //For edit below comment
  //user: UserDetailsData;// = {uid,firstName,lastName,dob,joinData,stream,semester} ;//any = {}; // working before
  // user : userD ;

  model2: string;

  //streams: Stream[];//=[] ;
  //semesters: Semester[];//=[] ;


  myUid: number;
  streams: Stream[] = [
    { id: 1, sname: 'CSE' },
    { id: 2, sname: 'IT' },
    { id: 3, sname: 'ECE' },
    { id: 4, sname: 'MECHANICAL' }
  ];
  semesters: Semester[] = [
    { id: 1, semName: 'SEM-I' },
    { id: 2, semName: 'SEM-II' },
    { id: 3, semName: 'SEM-III' },
    { id: 4, semName: 'SEM-IV' }
  ];

  @Output() nameChange = new EventEmitter<{}>();
  public datatxt: string;


  constructor(private ngbCalendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>,
    private myService: UserDSService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.userList = this.myService.userList;

   

  }

  get today() {
    return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
  }
  ////userList2:any[]=[];

  ngOnInit() {

     this.userList = this.myService.userList; // For Edit
   this.user = { 
     //uid: '',
      firstName: '', lastName: '', dob: '', joinDate: '', stream: '', semester: '' }; //<-- correct

    //edit
    this.id = +this.route.snapshot.paramMap.get('id');
  
    if(!isNaN(this.id))
    {
      alert("NaN: false: "+this.id);
      this.isUpdateMode = true;
      this.user = this.myService.getUser(this.id);
    } 
    else
    {
      alert("NaN: true : "+this.id);

      this.myUid = this.userList.length + 1;
      this.datatxt = this.myUid.toString();
      //uid: this.datatxt;
     // this.user = { uid: this.datatxt, firstName: '', lastName: '', dob: '', joinDate: '', stream: '', semester: '' }; //<-- correct
     this.user = {  firstName: '', lastName: '', dob: '', joinDate: '', stream: '', semester: '' }; //<-- correct
  
      //this.user.uid = this.datatxt;
    }

  }

  onSubmit() {
    //alert(`Userdetail onsubmit :${this.user.uid}\n${this.user.firstName}\n${this.user.lastName}`);
    // alert("Userdetail onsubmit");
    alert("this.isUpdateMode: " + this.isUpdateMode);
    if (this.isUpdateMode) {
      alert("edit mode: " + this.id);
      this.myService.onEditUser(this.user, this.id);
    }
    else {
      
      alert("add mode: ");
      this.myService.onAddUser(this.user);
    }
    // alert("After Userdetail submit:" + this.myService.userList.length);
    // alert("After Userdetail submit Flag:" + this.myService.isVisibleFlag);

    // this.nameChange.emit(this.user); //  this.nameChange.emit(this.user);
    this.router.navigateByUrl('users');
  }


}
