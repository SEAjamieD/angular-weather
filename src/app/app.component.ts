import { Component } from "@angular/core";
import { WeatherService } from "./services/weather.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "heroku-weather";
  menuOpen: boolean = false;
  currentCity;
  temp: number;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeatherByCity("seattle");
  }

  handleMenuOpen(event): void {
    this.menuOpen = !this.menuOpen;
  }

  //city input needed below
  getWeatherByCity(city: string): void {
    this.weatherService.getWeatherByCity(city).then(data => {
      console.log(data);
      this.currentCity = data;

      this.temp = Math.round(data.main.temp); // round the temperature
    });
  }

  updateCity(event: string): void {
    this.getWeatherByCity(event);
  }
}
