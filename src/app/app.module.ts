import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, AppRoutingModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
