import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  
})
export class AppComponent implements OnInit { 
  // msg:String = 'Sedang mengambil...';
  title:String;
  constructor() { }

  ngOnInit() { 
  }
}
