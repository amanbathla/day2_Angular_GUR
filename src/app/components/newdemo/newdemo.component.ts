import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newdemo',
  templateUrl: './newdemo.component.html',
  styleUrls: ['./newdemo.component.css']
})
export class NewdemoComponent implements OnInit {

  flag:Boolean;
  constructor() { }

  ngOnInit() {
 
 this.flag = false;
  }
   
  toggleDiv(){
    this.flag = !this.flag;
  }


}
