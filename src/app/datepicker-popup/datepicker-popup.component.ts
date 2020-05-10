import { Component, OnInit, Injectable } from '@angular/core'; 
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import{pickerModel} from './pickerModel'; 

import { NgModule } from '@angular/core';

import {NgbCalendar, NgbDateAdapter, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

// **
//  * This Service handles how the date is represented in scripts i.e. ngModel.
//  */
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
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
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  }
}


@Component({
  selector: 'app-datepicker-popup',
  templateUrl: './datepicker-popup.component.html',
  styleUrls: ['./datepicker-popup.component.scss'],
  //   // NOTE: For this example we are only providing current component, but probably
//   // NOTE: you will want to provide your main App Module
    providers: [
      {provide: NgbDateAdapter, useClass: CustomAdapter},
      {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
    ]
})
export class DatepickerPopupComponent implements OnInit {

  model: any;
  pickermodel:pickerModel;

  //constructor() { }

  ngOnInit(): void {
    this.pickermodel = new pickerModel();
    this.pickermodel.day =1;
    this.pickermodel.month =12;
    this.pickermodel.year =2020;
    
  }

  model1: string;
  model2: string;

  constructor(private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>) {}

  get today() {
    return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
  }

}

 