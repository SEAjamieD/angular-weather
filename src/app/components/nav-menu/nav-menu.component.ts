import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-nav-menu",
  templateUrl: "./nav-menu.component.html",
  styleUrls: ["./nav-menu.component.scss"]
})
export class NavMenuComponent implements OnInit {
  @Input() isOpen: boolean;

  constructor() {}

  ngOnInit() {}
}
