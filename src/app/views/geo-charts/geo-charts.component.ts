import { Component } from '@angular/core';
import { ChartType, GoogleChartsModule } from 'angular-google-charts';

import countries from '../../../data/countries.json';

@Component({
  selector: 'app-geo-charts',
  imports: [GoogleChartsModule],
  templateUrl: './geo-charts.component.html',
  styleUrl: './geo-charts.component.css',
})
export class GeoChartsComponent {
  geoChartType = ChartType.GeoChart;
  geoChartData = [
    ['Germany', 200],
    ['Liechtenstein', 300],
    ['France', 600],
  ];
  geoChartColumns = ['Country', 'Rating'];
  geoChartOptions = {
    width: 1000,
    region: 155,
  };

  mysChartColumns = ['Country', 'Population', 'Area (sq. km)'];
  mysChartData = [
    ['Malaysia', 32_365_999, 329_847],
    ['Singapore', 5_637_000, 728],
  ];
  mysChartOptions = {
    region: 'MY',
    colorAxis: { colors: ['green', 'blue'] },
    width: 1000,
    backgroundColor: '#a5f3fc',
    defaultColor: '#fde047',
    datalessRegionColor: '#fecaca',
  };

  // Reference: https://www.worldstandards.eu/cars/list-of-left-driving-countries/
  driveSideChartOptions = {
    colorAxis: { colors: ['red', 'blue'] },
    width: 1000,
  };
  driveSideChartColumns = ['Country', 'Driving Side'];
  driveSideChartData = countries.map((country) => {
    return [country.iso_2, country.driving_side === 'left' ? 1 : 0];
  });
}
