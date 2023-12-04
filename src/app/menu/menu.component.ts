import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 private user: string = "Hi amine";
 imgAltText = 'user image' ;
  constructor() { }
  ngOnInit(): void {

  }
  getuser():string{
    return this.user;
  }
  isConnected = true;
  }