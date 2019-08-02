import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { DataStoreInjector, DataStoreService } from '@gammon/data-store';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    // private datastoreInjector: DataStoreInjector,
    private inAppBrowser: InAppBrowser,
    // private datastoreService: DataStoreService,
    private  network: Network,
  ) {
    this.initializeApp();
  }

  signOut() {
   
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // const url = 'http://gamcnc11.gamska.com:8800/SignIn?responseType=code&clientID=036cfebf-34e3-4a0f-9620-8045756d0399&scope=INV&deviceID=INV-DEV&deviceName=INV-DEV&returnURL=http:%2F%2Fgamerp11:7060';
    //   // scope, state, allow_signup also available 
    //   const browser = this.inAppBrowser.create(url, '_gammon_auth', 'location=no');
    //   browser.on('loadstart').subscribe(evt => {
    //       console.log('evt.url = ' + evt.url);
    //       if(evt.url.indexOf('authCode') > -1) {
    //           // close the browser, we are done!
    //           browser.close();
    //           // TODO: pull the token out and 
    //           // use it for further API calls.
    //       }
    //   });
    //   browser.on('loaderror').subscribe(err => {
    //       console.log("error ", err);
    //       // TODO: handle this of course!
    //   });

    this.network.onDisconnect().subscribe(() => {
      console.log('offline');
    });
    this.network.onConnect().subscribe(() => {
      console.log('online');
      // this.datastoreService.ResentPendingRequest();
    });

  }



}
