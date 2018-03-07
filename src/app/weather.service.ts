import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class WeatherService {

	 data: BehaviorSubject<any[]> = new BehaviorSubject([]);

 constructor(private _http: HttpClient) { 
  	this.getWeather();
  }


getWeather(){
	this._http.get(`https://openweathermap.org/api`).subscribe((responseData:any)=>{
		console.log ('got weather', responseData);

	})

  }

}
