import { Component, OnInit } from "@angular/core";
import { TestService } from "./test.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
  providers: [TestService]
})
export class TestComponent implements OnInit {
  test: string;

  constructor(private testService: TestService) {}

  ngOnInit() {
    this.testService.getTest().then((test: string) => {
      this.test = test;
      return test;
    });
  }
}
