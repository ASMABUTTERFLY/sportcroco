import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl = 'http://localhost:3000/weather';

  constructor(private httpClient:HttpClient) { }

  search(obj: any) {

    return this.httpClient.post<{apiRes:any}>(this.weatherUrl, obj )
  }
}
