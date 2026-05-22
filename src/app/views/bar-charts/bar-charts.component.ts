import { Component } from '@angular/core';
import { ChartType, GoogleChartsModule } from 'angular-google-charts';

@Component({
  selector: 'app-bar-charts',
  standalone: true,
  imports: [GoogleChartsModule],
  templateUrl: './bar-charts.component.html',
  styleUrl: './bar-charts.component.css',
})
export class BarChartsComponent {
  data = [
    ['2013', 1000, 400],
    ['2014', 1170, 460],
    ['2015', 660, 1120],
    ['2016', 1030, 540],
  ];
  columns = ['Year', 'Sales', 'Expenses'];
  type = ChartType.BarChart;
  options = {
    title: 'Company Performance',
    hAxis: {
      title: 'Year',
    },
    vAxis: {
      title: 'Sales and Expenses',
    },
    seriesType: 'bars',
    series: { 5: { type: 'line' } },
  };
  options2 = { ...this.options, isStacked: true };
  type3 = ChartType.Bar;
  options3 = { ...this.options, bars: 'vertical' };
  type4 = ChartType.ColumnChart;
  options4 = { ...this.options, orientation: 'vertical' };
}
