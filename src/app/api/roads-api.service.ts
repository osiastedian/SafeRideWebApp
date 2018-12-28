import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Location } from '../interfaces/trip';
import { Observable } from 'rxjs';
import { RoadsAPIResults } from '../interfaces/roads-api-results';

@Injectable({
  providedIn: 'root'
})
export class RoadsApiService {
  baseUrl = 'https://maps.googleapis.com/maps/api/place';
  constructor(private httpClient: HttpClient) {}

  getNearbyPlaces(
    location: Location,
    radius = 500,
    rankby = 'distance'
  ): Observable<RoadsAPIResults> {
    return <Observable<RoadsAPIResults>>this.httpClient.get(
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
      {
        // `${this.baseUrl}/nearbysearch/json`, {
        params: {
          location: `${location.latitude},${location.longitude}`,
          radius: `${radius}`,
          // 'rankby': rankby,
          key: environment.googleMaps
        }
      }
    );
  }
}
