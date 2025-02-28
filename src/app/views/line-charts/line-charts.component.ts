import { trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ChartType, GoogleChartsModule } from 'angular-google-charts';

@Component({
  selector: 'app-line-charts',
  imports: [GoogleChartsModule],
  templateUrl: './line-charts.component.html',
  styleUrl: './line-charts.component.css',
})
export class LineChartsComponent {
  data = [
    ['2013', 1000, 400],
    ['2014', 1170, 460],
    ['2015', 660, 1120],
    ['2016', 1030, 540],
  ];
  columns = ['Year', 'Sales', 'Expenses'];
  type = ChartType.LineChart;
  options = {
    series: {
      0: { targetAxisIndex: 0 },
      1: { targetAxisIndex: 1 },
    },
    vAxes: {
      0: { title: 'Sales' },
      1: { title: 'Expenses' },
    },
  };
  options2 = { ...this.options, curveType: 'function' };
  columns3 = ['Month', 'Happy', 'Sad', 'Neutral'];
  data3 = [
    ['January', 10, 5, 4],
    ['February', 20, 7, 6],
    ['March', 30, 9, 8],
    ['April', 40, 10, 9],
    ['May', 50, 12, 10],
    ['June', 60, 15, 12],
    ['July', 70, 20, 15],
    ['August', 80, 25, 20],
    ['September', 90, 30, 25],
    ['October', 100, 35, 30],
    ['November', 110, 40, 35],
    ['December', 120, 45, 40],
  ];
  options3 = {
    colors: ['#727D73', '#AAB99A', '#D0DDD0'],
  };
  options4 = {
    selectionMode: 'multiple',
    tooltip: { trigger: 'selection' },
    aggregationTarget: 'category',
    animation: {
      startup: true,
      easing: 'linear',
    },
  };
  options5 = {
    crosshair: {
      trigger: 'both',
      orientation: 'both',
    },
  };
}
