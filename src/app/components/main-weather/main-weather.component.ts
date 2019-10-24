import { Component, OnInit, Input } from "@angular/core";
import { Temperatures } from "../../types/temperatures";

@Component({
  selector: "app-main-weather",
  templateUrl: "./main-weather.component.html",
  styleUrls: ["./main-weather.component.scss"]
})
export class MainWeatherComponent implements OnInit {
  @Input() temperature: number;
  constructor() {}

  ngOnInit() {}
}
