import { Component, OnInit, Input, Output  } from '@angular/core'; 

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  @Input ()
  inputValue : string;

  @Output()
  childData :string;

  constructor() { }

  ngOnInit(): void {
  }

}
