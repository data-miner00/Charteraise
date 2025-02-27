import { Component } from '@angular/core';
import { ChartType, GoogleChartsModule } from 'angular-google-charts';

type Chart = {
  data: any[];
  columns: string[];
  type: ChartType;
  options: any;
};

@Component({
  selector: 'app-pie-charts',
  imports: [GoogleChartsModule],
  templateUrl: './pie-charts.component.html',
  styleUrl: './pie-charts.component.css',
})
export class PieChartsComponent {
  // My programming experience
  data = [
    ['Python', 10],
    ['JavaScript', 8],
    ['Java', 6],
    ['C++', 4],
    ['C#', 2],
  ];
  columns = ['Language', 'Years'];
  type = ChartType.PieChart;
  options = {
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
  };
  options2 = {
    pieHole: 0.3,
  };
  options3 = {
    pieStartAngle: 90,
  };
  options4 = {
    slices: {
      4: { offset: 0.2 },
    },
  };
  options5 = {
    is3D: true,
  };
  options6 = {
    sliceVisibilityThreshold: 0.2,
  };
}
