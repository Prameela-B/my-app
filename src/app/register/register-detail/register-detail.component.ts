import { Component, OnInit, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'app-register-detail',
  templateUrl: './register-detail.component.html',
  styleUrls: ['./register-detail.component.scss']
})
export class RegisterDetailComponent implements OnInit {

 @Input() user : any = {};
  name : any;
  @Output()
  nameChange = new EventEmitter<{}>();

  constructor() { }

  ngOnInit(): void {
    
  }

  // onInputChange(event: any) {
  //   this.name = event.target.value;
  // }
  onSubmit() {
    this.nameChange.emit(this.user);
  }
}
