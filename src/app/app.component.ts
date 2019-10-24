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
    this.getWeatherByCity("Seattle");
  }

  handleMenuOpen(event): void {
    this.menuOpen = !this.menuOpen;
  }

  getWeather(): void {
    this.weather = this.weatherService.getWeather();
  }

  //city input needed below
  getWeatherByCity(city: string): void {
    const returnedCity = this.weatherService.getWeatherByCity(city);
    this.currentCity = returnedCity[0];
    console.log(this.currentCity);
  }

  updateCity(event: string): void {
    this.getWeatherByCity(event);
  }
}
