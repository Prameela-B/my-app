import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  itemList: any[];

  constructor() { }

  ngOnInit(): void {
    this.itemList = [
      {id:1, name: 'Apple'},
      {id:2, name: 'Orange'},
      {id:3, name: 'Mango'},
      {id:4, name: 'Gauva'}
    ]
  }
    refresh()
    {
      this.itemList = [
        {id:1, name: 'Apple'},
        {id:2, name: 'Orange'},
        {id:3, name: 'Mango'},
        {id:4, name: 'Fig'},
        {id:5, name: 'kiwi'}

      ]
    }
    trackByItemId(index:number,item:any)
    {
      return item.id;

    }
  }


