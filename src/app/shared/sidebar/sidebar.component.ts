import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type Link = {
  url: string;
  name: string;
  icon: string;
};

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  links: Link[] = [
    {
      url: '/line-charts',
      name: 'Line Charts',
      icon: 'bi-graph-up',
    },
    {
      url: '/bar-charts',
      name: 'Bar Charts',
      icon: 'bi-bar-chart',
    },
    {
      url: '/gauge-charts',
      name: 'Gauge Charts',
      icon: 'bi-speedometer2',
    },
    {
      url: '/geo-charts',
      name: 'Geo Charts',
      icon: 'bi-globe-americas',
    },
    {
      url: '/pie-charts',
      name: 'Pie Charts',
      icon: 'bi-pie-chart',
    },
    {
      url: '/histograms',
      name: 'Histograms',
      icon: 'bi-bar-chart-steps',
    },
  ];
}
