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

  constructor() {}

  ngOnInit() {}

  handleOpen(): void {
    this.isOpen.emit();
  }
}
