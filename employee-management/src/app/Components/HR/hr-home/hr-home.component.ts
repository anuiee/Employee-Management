import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartsComponent } from '../../charts/charts.component';
import { ActivityChartComponent } from '../../activity-chart/activity-chart.component';
import { LeaveListComponent } from '../leave-list/leave-list.component';
import { TotalEmployeesComponent } from '../total-employees/total-employees.component';

@Component({
  selector: 'app-hr-home',
  standalone: true,
  imports: [CommonModule,
            RouterModule,
            ChartsComponent,
            ActivityChartComponent,
            LeaveListComponent,
            TotalEmployeesComponent,
          ],
  templateUrl: './hr-home.component.html',
  styleUrl: './hr-home.component.scss'
})
export class HrHomeComponent {


}
