import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  title = 'Intelli5 location';
  centerLat = 45.497014;
  centerLng = -73.617662;
  lat = 45.502202;
  lng = -73.569510;
  zoom = 13;
  labelOptions = {
    color: 'black',
    fontFamily: '',
    fontSize: '14px',
    fontWeight: 'bold',
    text: "Intelli5 location"
  }
}