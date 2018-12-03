import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { MyApp } from "./app.component";
import { HttpModule } from "@angular/http";

import { Geolocation } from "@ionic-native/geolocation";
import { SearhcMuseumPage } from "../pages/search-museum/search-museum";
import { MuseumDetailPage } from "../pages/museum-detail/museum-detail";
import { AllMuseumPage } from "../pages/all-museum/all-museum";

@NgModule({
  declarations: [MyApp, SearhcMuseumPage, MuseumDetailPage, AllMuseumPage],
  imports: [BrowserModule, HttpModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, SearhcMuseumPage, MuseumDetailPage, AllMuseumPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Geolocation
  ]
})
export class AppModule {}
