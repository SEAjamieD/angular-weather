import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
// import Temperatures type and mock weather as fake api return
import { Temperatures } from "../types/temperatures";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  constructor(private http: Http) {}

  getWeatherByCity(inputCity: string): Promise<void | string> {
    return (
      this.http
        .get(`api/weather/${inputCity}`)
        .toPromise()
        .then(response => response.json())
        // .then(response => response.json() as string)
        .catch(this.handleError)
    );
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
