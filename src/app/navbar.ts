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
  toServices(){
    document.getElementById("services").scrollIntoView({behavior: "smooth"});
    navBarOpen();
  }
  toDataSolutions(){
    document.getElementById("data-solutions").scrollIntoView({behavior: "smooth"});
    navBarOpen();
  }
  toAbout(){
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
    navBarOpen();
  }
  toContact(){
    document.getElementById("contact").scrollIntoView({behavior: "smooth"});
    navBarOpen();
  }
}