import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
// import Temperatures type and mock weather as fake api return
import { Temperatures } from "../types/temperatures";
import { MOCK_WEATHER } from "./mock-weather";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  constructor(private http: Http) {}

  // getWeather(): Promise<void | string> {
  getWeather() {
    console.log("getting weather");
    return this.http
      .get("api/weather/seattle")
      .toPromise()
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(this.handleError);
  }

  getWeatherByCity(inputCity: string): Temperatures[] {
    return MOCK_WEATHER.filter(place => {
      if (place.city === inputCity) {
        return place;
      }
    });
  }

  private handleError(error: any) {
    let errMsg = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : "Server error";
    console.log(errMsg); // log to console instead
  }
}
