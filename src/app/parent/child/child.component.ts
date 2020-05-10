import { Component, OnInit, Input, Output } from '@angular/core';
//import { EventEmitter } from 'protractor';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {


  @Input()
  parentData : string;
  childData : string;
  inputValue : string;

  @Output()  
  childEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
