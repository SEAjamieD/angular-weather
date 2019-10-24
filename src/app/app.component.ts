import { Component } from "@angular/core";
import { WeatherService } from "./services/weather.service";
import { Temperatures } from "./types/temperatures";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "heroku-weather";
  menuOpen: boolean = false;
  weather: Temperatures[];
  currentCity: Temperatures;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeatherByCity();
  }

  handleMenuOpen(event): void {
    this.menuOpen = !this.menuOpen;
  }

  getWeather(): void {
    this.weather = this.weatherService.getWeather();
  }

  //city input needed below
  getWeatherByCity(): void {
    const returnedCity = this.weatherService.getWeatherByCity("Seattle");
    this.currentCity = returnedCity[0];
    console.log(this.currentCity);
  }
}
