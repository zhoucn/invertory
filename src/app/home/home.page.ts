import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public option: any = {
    series: [
      {
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
          normal: {
            position: 'inner'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {value: 9, name: '9', itemStyle: {color: '#584B8D'}},
          {value: 5, name: '5', itemStyle: {color: '#584B8D'}}
        ]
      },
      {
        type: 'pie',
        radius: ['50%', '70%'],
        label: {
          normal: {
            show: true,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        roseType: true,
        data: [
          {value: 55, itemStyle: {color: '#584B8D'}},
          {value: 1, itemStyle: {color: '#fff'}},
          {value: 55, itemStyle: {color: '#584B8D'}},
          {value: 1, itemStyle: {color: '#fff'}},
          {value: 55, itemStyle: {color: '#584B8D'}},
          {value: 1, itemStyle: {color: '#fff'}},
          {value: 55, itemStyle: {color: '#584B8D'}},
          {value: 1, itemStyle: {color: '#fff'}},
          {value: 55, itemStyle: {color: '#584B8D'}},
          {value: 1, itemStyle: {color: '#fff'}},
          {value: 55, itemStyle: {color: '#f5f5f5'}},
          {value: 1, itemStyle: {color: '#fff'}},
          {value: 55, itemStyle: {color: '#f5f5f5'}},
          {value: 1, itemStyle: {color: '#fff'}},
          {value: 55, itemStyle: {color: '#f5f5f5'}},
          {value: 1, itemStyle: {color: '#fff'}},
          {value: 55, itemStyle: {color: '#f5f5f5'}},
          {value: 1, itemStyle: {color: '#fff'}}
        ]
      }
    ]
  };

  constructor() {
  }

}
