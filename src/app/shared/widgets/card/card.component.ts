import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from "highcharts";
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public Highcharts = Highcharts;
  public chartOptions = {};

  @Input() label:string;
  @Input() total:string;
  @Input()  percentage:string;
  @Input()  data = [];

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: "area",
        backgroundColor:null,
        borderWidth:0,
        margin: [2, 2, 2, 2],
        height:60
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      tooltip: {
        split: true,
        outside: true
      },
      legend: {
        enable:false
      },
      cradist: {
        enable:false
      },
      exporting: {
        enable:false,
        
      },
      xAxis: {
        labels: {
          enable:false,
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      yAxis: {
        labels: {
          enable:false,
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      series: [{
        data:  this.data     
       }]
    };
    
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300)
  }
}
