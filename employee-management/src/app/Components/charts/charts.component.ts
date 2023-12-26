import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Chart, ChartConfiguration} from 'chart.js';
import {Chart,ChartConfiguration,registerables} from 'chart.js'
import { NgChartsModule } from 'ng2-charts';
import { LeaveService } from '../../Services/leave.service';
import { log } from 'console';
Chart.register(...registerables);
@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [CommonModule,NgChartsModule,RouterOutlet],
  providers:[LeaveService],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent {
  
    public barChartLegend = true;
    public barChartPlugins = [];
  
    public barChartData: ChartConfiguration<'bar'>['data'] = {
      labels: [ '26-12-23','25-12-23','24-12-23','24-12-23' ],
      datasets: [
        { data: [ 5, 7, 2, 10 ], label: 'Rejected' },
        { data: [ 2, 3, 5, 15 ], label: 'Approved' }
      ]
    };
  
    public barChartOptions: ChartConfiguration<'bar'>['options'] = {
      responsive: false,
    };

  
}
