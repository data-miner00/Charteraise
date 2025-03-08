import { Component, OnInit, signal } from '@angular/core';
import { ChartType, GoogleChartsModule } from 'angular-google-charts';

@Component({
  selector: 'app-home',
  imports: [GoogleChartsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  pieChartType = ChartType.PieChart;
  ngOnInit(): void {
    // setInterval(() => {
    //   this.refreshData();
    //   this.refreshCpuMemoryData();
    // }, 1000);
  }
  now = new Date();
  counter = signal(5);
  data = [
    [1, 11],
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 7],
  ];
  columns = ['Time', 'Kilobytes per second'];
  type = ChartType.LineChart;
  lineChartType = ChartType.LineChart;
  options = {};

  candleStickType = ChartType.CandlestickChart;
  candleStickData = [
    ['Mon', 20, 28, 38, 45],
    ['Tue', 31, 38, 55, 66],
    ['Wed', 50, 55, 77, 80],
    ['Thu', 77, 77, 66, 50],
    ['Fri', 68, 66, 22, 15],
  ];

  pieChartData = [
    ['Used Space', 256],
    ['Free Space', 1512],
  ];
  pieChartOptions = {
    is3D: true,
    colors: ['#422ad5', '#f43098'],
  };

  cpuMemorySignal = signal(6);
  cpuMemoryData = [
    [1, 3000, 1],
    [2, 3600, 10],
    [3, 3800, 7],
    [4, 4100, 5],
    [5, 5000, 1],
    [6, 5000, 16],
  ];
  cpuMemoryOptions = {
    series: {
      0: { targetAxisIndex: 0 },
      1: { targetAxisIndex: 1 },
    },
    vAxes: {
      // Adds titles to each axis.
      0: { title: 'Memory' },
      1: { title: 'CPU' },
    },
    animation: {
      duration: 200,
    },
  };
  cpuMemoryColumns = ['Time', 'Memory', 'CPU'];

  containerStatusData = [
    ['Running', 10],
    ['Exited', 5],
    ['Created', 3],
  ];
  containerStatusOptions = {
    is3D: true,
    colors: ['#422ad5', '#f43098', '#f4a130'],
    pieHole: 0.4,
  };

  geoChartType = ChartType.GeoChart;
  geoChartData = [
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700],
    ['MY', 1000],
    ['CN', 300],
  ];
  geoChartColumns = ['Country', 'Requests'];
  geoChartOptions = {
    width: 1000,
  };

  refreshData() {
    this.counter.update((c) => c + 1);
    this.data = [
      ...this.data.slice(1),
      [this.counter(), ~~(Math.random() * 30)],
    ];
  }

  refreshCpuMemoryData() {
    this.cpuMemorySignal.update((c) => c + 1);
    this.cpuMemoryData = [
      ...this.cpuMemoryData.slice(1),
      [
        this.cpuMemorySignal(),
        ~~(Math.random() * 12000),
        ~~(Math.random() * 100),
      ],
    ];
  }
}
