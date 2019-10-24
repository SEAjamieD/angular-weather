import { Injectable } from "@angular/core";
// import Temperateres type and mock weather as fake api return
import { Temperatures } from "../types/temperatures";
import { MOCK_WEATHER } from "./mock-weather";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  constructor() {}

  getWeather(): Temperatures[] {
    return MOCK_WEATHER;
  }

  getWeatherByCity(inputCity: string): Temperatures[] {
    return MOCK_WEATHER.filter(place => {
      if (place.city === inputCity) {
        return place;
      }
    });
  }
}
