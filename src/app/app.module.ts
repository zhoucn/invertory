import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppSettings } from './app-settings';
import { environment } from '../environments/environment';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import { Network } from '@ionic-native/network/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    // DataStoreModule.forRoot(),
    // InventoryApi.forRoot(() => new Configuration),
    IonicModule.forRoot(),
    AppRoutingModule,
    // MmaAngularJwtModule.forRoot(
    //   {
    //     whitelistedDomains: environment.whitelistedDomains,
    //     blacklistedRoutes: environment.blacklistedRoutes,
    //     skipWhenExpired: false,
    //     mma: {
    //       MmaHost: environment.mma.MmaHost,
    //       scope: environment.mma.scope,
    //       deviceID: environment.mma.deviceID,
    //       deviceName: environment.mma.deviceName,
    //       clientID: environment.mma.clientID,
    //       authMethod: environment.mma.authMethod
    //     }
    //   }
    // )
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    Network,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // {
    //   provide: "DATASTORE_CONFIG", useValue: AppSettings.dataStoreConfig
    // }, 
    // { provide: BASE_PATH, useValue: environment.API_BASE_PATH },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
