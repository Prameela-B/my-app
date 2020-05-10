import { Component } from '@angular/core';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _title = 'CRM-Employee';
  public get title() {
    return this._title;
  }
  public set title(value) {
    this._title = value;
  }
  dynamicComponent = "This is from dynamicComponent!!"
}

