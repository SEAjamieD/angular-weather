import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MainWeatherComponent } from "./components/main-weather/main-weather.component";
import { NavMenuComponent } from "./components/nav-menu/nav-menu.component";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    MainWeatherComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
