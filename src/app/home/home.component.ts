import { Component } from '@angular/core';

import { ChartType, GoogleChartsModule } from 'angular-google-charts';

@Component({
  selector: 'app-home',
  imports: [GoogleChartsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  now = new Date();
  data = [
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ];
  columns = ['Task', 'Hours per Day'];
  type = ChartType.PieChart;
  options = {
    // is3D: true,
    pieHole: 0.4,
    pieStartAngle: 100,
    pieSliceText: 'label',
    slices: {
      0: { offset: 0.4 },
    },
    sliceVisibilityThreshold: 0.4,
    backgroundColor: '#fef3e1',
  };
}
