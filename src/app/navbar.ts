import { Component } from '@angular/core';

declare const navBarOpen : any;

@Component({
  selector: 'navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {
  callNav(){
    navBarOpen();
  }
}