import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentToChildMsg: String = "stay safe and healthy forever";
  childToParentMsg: String;

  constructor() { }

  ngOnInit(): void {

  }

  childToParent(msg: String){
    this.childToParentMsg = msg;
  }

  sendMsgToChild(value: String) {
    this.parentToChildMsg = value;
  }

}
