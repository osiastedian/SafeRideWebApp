import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


const settings = {timestampsInSnapshots: true};
const config = {
  apiKey: 'AIzaSyAeD-YBlVzZkPI3R9VSOTcoWYlxoK8CoCQ',
  authDomain: 'saferideph-1544668683608.firebaseapp.com',
  databaseURL: 'https://saferideph-1544668683608.firebaseio.com',
  projectId: 'saferideph-1544668683608',
  storageBucket: 'saferideph-1544668683608.appspot.com',
  messagingSenderId: '839719557569'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
  }
}
