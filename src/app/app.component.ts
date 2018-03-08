import { Component, OnInit } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedOptions = "";

  selectOptions = [];

  public ngOnInit() {
      window.setTimeout(()=>{
        this.selectOptions = [
          {value:1,name:"Option 1"},
          {value:2,name:"Option 2"},
          {value:3,name:"Option 3"}
        ]
      },100);

      // window.setInterval(()=>{
      //   console.log(this.radioButtonValue);
      // },500);
  }

}
