import { Component } from '@angular/core';
declare var require: any;

// You can load Highcharts static if you need its API
import * as Highcharts from 'highcharts';

interface Grafik {
    judul:string,
    data:any[]
}
@Component({
    templateUrl: 'grafik.html',
    styles: [`
      chart {
        display: block;
      }
    `]

})
export class GrafikComponent{
    // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers
  constructor() {
    this.options = {
      chart: {
        type: 'pie'
      },
      tooltip: {
        pointFormat: '{point.percentage:.1f}%'
      },
      plotOptions: {
        pie: {
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
      },
      series: [{
        innerSize: '50%',
        data: [
            ['Lunas',   90],
            ['Belum',   10]
        ]
      }]
    };
  }
  options: Object;

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value: string) {
    console.log('submitState', value);
    // this.appState.set('value', value);
    this.localState.value = '';
  }
}

var GRAFIK: Grafik[] = [
    {
        "judul":"TK",
        "data":[
            {
                "status":"Belum",
                "spp":20,
            },
            {
                "status":"sudah",
                "spp":90,
            },
        ]
    },
    {
        "judul":"SD",
        "data":[
            {
                "status":"Belum",
                "spp":40,
            },
            {
                "status":"sudah",
                "spp":60,
            },
        ]
    },
    {
        "judul":"SMP",
        "data":[
            {
                "status":"Belum",
                "spp":40,
            },
            {
                "status":"sudah",
                "spp":80,
            },
        ]
    },

];