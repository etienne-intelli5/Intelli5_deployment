import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Navbar } from "./navbar";
import { Header } from "./header";
import { Expertise } from "./expertise";
import { Services } from "./services";
import { DataBanner } from "./data-banner";
import { DataSolution } from "./data-solution";
import { Partners } from "./partners";
import { AboutBanner } from "./about-banner";
import { Contact } from "./contact";
import { Footer } from "./footer"

@NgModule({
  declarations: [
    Navbar,
    Header,
    Expertise,
    Services,
    DataBanner,
    DataSolution,
    Partners,
    AboutBanner,
    Contact,
    Footer
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [Navbar, Header, Expertise, Services, DataBanner, DataSolution, Partners, AboutBanner, Contact, Footer]
})
export class AppModule { }
