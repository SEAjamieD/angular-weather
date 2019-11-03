import { Component, Input, OnChanges } from "@angular/core";
import { Temperatures } from "../../types/temperatures";

@Component({
  selector: "app-main-weather",
  templateUrl: "./main-weather.component.html",
  styleUrls: ["./main-weather.component.scss"]
})
export class MainWeatherComponent implements OnChanges {
  @Input() temperature: number;
  @Input() forecast: any; //look up array of 5 objects

  public forecastTemps = [];

  constructor() {}

  ngOnChanges() {
    this.formatForecastTemps(this.forecast);
  }

  private formatForecastTemps(forecast: Array<any>): void {
    if (this.forecast) {
      this.forecastTemps = [];
      this.forecast.map(cast => {
        let formattedTemp = Math.round(cast.main.temp);
        this.forecastTemps.push(formattedTemp);
      });
    }
  }
}
