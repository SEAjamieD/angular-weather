import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Temperatures } from "../../types/temperatures";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  @Input() currentCity: Temperatures;
  @Output() isOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() newCity: EventEmitter<string> = new EventEmitter<string>();

  public searchOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  handleOpen(): void {
    this.isOpen.emit();
  }

  toggleSearchOpen(): void {
    this.searchOpen = !this.searchOpen;
  }

  // not pulling city from user input yet
  handleSearch(newCity: string): void {
    this.newCity.emit(newCity);
    this.toggleSearchOpen();
  }
}
