import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BarChartsComponent } from './views/bar-charts/bar-charts.component';
import { GaugeChartsComponent } from './views/gauge-charts/gauge-charts.component';
import { GeoChartsComponent } from './views/geo-charts/geo-charts.component';
import { HistogramsComponent } from './views/histograms/histograms.component';
import { LineChartsComponent } from './views/line-charts/line-charts.component';
import { PieChartsComponent } from './views/pie-charts/pie-charts.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home | Chârteraisé',
    component: HomeComponent,
  },
  {
    path: 'user',
    component: HomeComponent,
  },
  {
    path: 'pie-charts',
    title: 'Pie Charts | Chârteraisé',
    component: PieChartsComponent,
  },
  {
    path: 'bar-charts',
    title: 'Bar Charts | Chârteraisé',
    component: BarChartsComponent,
  },
  {
    path: 'gauge-charts',
    title: 'Gauge Charts | Chârteraisé',
    component: GaugeChartsComponent,
  },
  {
    path: 'line-charts',
    title: 'Line Charts | Chârteraisé',
    component: LineChartsComponent,
  },
  {
    path: 'geo-charts',
    title: 'Geo Charts | Chârteraisé',
    component: GeoChartsComponent,
  },
  {
    path: 'histograms',
    title: 'Histograms | Chârteraisé',
    component: HistogramsComponent,
  },
];
