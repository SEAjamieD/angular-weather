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
  currentCity: any;
  currentForecast: any;
  forecast: any;
  temp: number;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeatherForecastAndTempByCity("seattle");
  }

  handleMenuOpen(event): void {
    this.menuOpen = !this.menuOpen;
  }

  getWeatherForecastAndTempByCity(city: string): void {
    this.weatherService
      .getWeatherForecastAndTempByCity(city)
      .subscribe(responseList => {
        this.currentCity = responseList[0].json();
        this.currentForecast = responseList[1].json();

        this.temp = Math.round(this.currentCity.main.temp); // Round the current temp
        this.forecast = this.currentForecast.list
          .slice(3)
          .filter((_, i) => i % 8 === 0);
        console.log(this.currentCity);
        console.log(this.forecast);
      });
  }

  updateCity(event: string): void {
    this.getWeatherForecastAndTempByCity(event);
  }
}
