import { Component, OnInit,Input,Output } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userData:{};
  @Input() isVisibleFlag =false; 

  
  constructor() { }

  ngOnInit(): void {
    
     this.userData = {};

  }
  
  onAddUser()
  {
    this.isVisibleFlag = !this.isVisibleFlag ;
  }
  onSubmit(name: {}) {
     
    this.userData = name;

    this.isVisibleFlag = false;


  }
  // onInputChange(event:any)
  // {
  //  //this.userName = event.target.value;
  // this.userName = name;
  // }
}
