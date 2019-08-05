import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }async changeProject() {
    const actionSheet = await this.actionSheetController.create({
      mode: 'md',
      cssClass: 'action-sheet',
      buttons: [{
        text: '13788 - L2 Contract of Lyric Theatre Complex and Extended Basement',
        role: 'destructive',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: '13828 - Advanced Manufacturing Centre',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: '13718 - Cent\'l Kln Route-Kai Tak West',
        handler: () => {
          console.log('Play clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  changeLanguage() {}
}
