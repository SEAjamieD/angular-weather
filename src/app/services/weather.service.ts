import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable, forkJoin } from "rxjs";
// import Temperatures type and mock weather as fake api return
import { Temperatures } from "../types/temperatures";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  constructor(private http: Http) {}

  getWeatherByCity(inputCity: string): Promise<any> {
    return (
      this.http
        .get(`api/weather/${inputCity}`)
        .toPromise()
        .then(response => response.json())
        // .then(response => response.json() as string)
        .catch(this.handleError)
    );
  }

  public getWeatherForecastAndTempByCity(inputCity: string): Observable<any[]> {
    let weatherResponse = this.http.get(`api/weather/${inputCity}`);
    let forecast = this.http.get(`api/forecast/${inputCity}`);

    return forkJoin([weatherResponse, forecast]);
  }

  // Error Handling
  private handleError(error: any) {
    let errMsg = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : "Server error";
    console.log(errMsg); // log to console instead
    return errMsg;
  }
}
