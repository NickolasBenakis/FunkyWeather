import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";


@Injectable()
export class WeatherProvider {
apiKey="5f0af853e318d3a3";
url;
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url= 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }
 getWeather(city,state):Observable<HttpClient>{
    return this.http.get<HttpClient>(this.url+'/'+state+'/'+city+'.json')

 }
}
