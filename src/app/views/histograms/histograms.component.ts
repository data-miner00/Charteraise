import { Component, OnInit } from '@angular/core';
import { ChartType, GoogleChartsModule } from 'angular-google-charts';

@Component({
  selector: 'app-histograms',
  imports: [GoogleChartsModule],
  templateUrl: './histograms.component.html',
  styleUrl: './histograms.component.css',
})
export class HistogramsComponent implements OnInit {
  type = ChartType.Histogram;
  ages = [22, 25, 27, 30, 32, 35, 37, 40, 42, 45, 47, 50, 52, 55, 57, 60];
  data: number[][] = [];

  ngOnInit(): void {
    const ageGroups = this.ages.reduce(
      (acc, age) => {
        const group = Math.floor(age / 10) * 10; // Group by decade
        if (!acc[group]) {
          acc[group] = 0;
        }
        acc[group]++;
        return acc;
      },
      <{ [number: number]: number }>{}
    );

    this.data = Object.values(this.ages).map((count) => [count]);
    this.columns = ['Age Group'];
  }

  columns = ['Age Group', 'Count'];
  options = {
    title: 'Age Distribution',
    legend: { position: 'top' },
    hAxis: {
      title: 'Age Group',
      format: 'decimal',
    },
    vAxis: {
      title: 'Count',
    },
    histogram: {
      bucketSize: 10, // Set bucket size to 10 years
    },
  };
}
