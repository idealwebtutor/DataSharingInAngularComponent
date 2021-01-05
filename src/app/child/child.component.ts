import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 
  @Input('parentToChild') parentToChildMsg: String;


  @Output() childToParent = new EventEmitter();


  message: String = 'Yes, I will always remember your advice.';



  constructor() { }

  ngOnInit(): void {
    this.childToParent.emit(this.message);
  }



  sendMsgToParent(value: String) {

    this.childToParent.emit(value);
  }



  
}
