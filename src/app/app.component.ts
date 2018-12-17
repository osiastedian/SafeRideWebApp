import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  lat = 10.3290956;
  lng = 123.9062649;
  apiKey = environment.googleMaps;

  ngOnInit(): void {}
}
