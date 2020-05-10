import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.imageUrl = this.imageArray[0];
  }

  button= 'button';
  //tslint:disable-next-line:max-line-length
  imageArray =['https://clipartart.com/images/number-clipart-transparent-png-16.jpg',
  'https://clipartart.com/images/clipart-three-7.jpg',
'https://clipartart.com/images/free-clipart-number-6-6.jpg',
'https://clipartart.com/images/4-clipart-11.jpg'];
  imageUrl:string;
  onToogleImage()
  {
   const randomIndex = Math.floor(Math.random() * (3-0) + 0);
   console.log(randomIndex) ;
   this.imageUrl= this.imageArray[randomIndex]; 
  }
onClick(event:Element)
{
  console.log(event);

  alert('Add New Employee Details');
}
onChange(event:any)
{
  alert(event.target.value);
}
//Structural Directive condition expression
conditionFlag =true;
onToogleIfCondition()
{
  this.conditionFlag = !this.conditionFlag;
}

}
