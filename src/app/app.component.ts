import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Sharing in Angular components';
  acceptableReferrers = "https://angular.idealwebtutor.com/";

  constructor(private _location: Location) { }

  ngOnInit(): void {

  }

  backClicked() {
    this._location.back();
  }

  isBackAvailable () {
    if(document.referrer.includes(this.acceptableReferrers)) {
      return true;
    } else {
      return false;
    }
  }
}
