import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ChartType, GoogleChartsModule } from 'angular-google-charts';

@Component({
  selector: 'app-gauge-charts',
  imports: [GoogleChartsModule],
  templateUrl: './gauge-charts.component.html',
  styleUrl: './gauge-charts.component.css',
})
export class GaugeChartsComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
  memory = signal(0);
  data = [
    ['Memory', 0],
    ['CPU', 55],
    ['Network', 68],
  ];
  columns = ['Label', 'Value'];
  type = ChartType.Gauge;
  options = {
    width: 400,
    height: 120,
    redFrom: 90,
    redTo: 100,
    yellowFrom: 75,
    yellowTo: 90,
    minorTicks: 5,
  };
  interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      var random = Math.floor(Math.random() * 100);
      var random2 = Math.floor(Math.random() * 100);
      var random3 = Math.floor(Math.random() * 100);
      this.data = [
        ['Memory', random],
        ['CPU', random2],
        ['Network', random3],
      ];
    }, 1000);
  }
}
