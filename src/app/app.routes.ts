import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BarChartsComponent } from './views/bar-charts/bar-charts.component';
import { GaugeChartsComponent } from './views/gauge-charts/gauge-charts.component';
import { LineChartsComponent } from './views/line-charts/line-charts.component';
import { PieChartsComponent } from './views/pie-charts/pie-charts.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home | Charteraise',
    component: HomeComponent,
  },
  {
    path: 'user',
    component: HomeComponent,
  },
  {
    path: 'pie-charts',
    title: 'Pie Charts | Charteraise',
    component: PieChartsComponent,
  },
  {
    path: 'bar-charts',
    title: 'Bar Charts | Charteraise',
    component: BarChartsComponent,
  },
  {
    path: 'gauge-charts',
    title: 'Gauge Charts | Charteraise',
    component: GaugeChartsComponent,
  },
  {
    path: 'line-charts',
    title: 'Line Charts | Charteraise',
    component: LineChartsComponent,
  },
];
