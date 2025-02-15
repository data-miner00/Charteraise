import { UpperCasePipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

import { ChartType, GoogleChartsModule } from 'angular-google-charts';

@Component({
  selector: 'app-home',
  imports: [UpperCasePipe, DatePipe, GoogleChartsModule],
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
}
