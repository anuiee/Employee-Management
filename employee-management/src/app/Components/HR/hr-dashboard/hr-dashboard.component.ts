import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { AuthService } from '../../../auth.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { LeaveListComponent } from '../leave-list/leave-list.component';
import { ChartsComponent } from '../../charts/charts.component';
import { ActivityChartComponent } from '../../activity-chart/activity-chart.component';
import { HrHomeComponent } from '../hr-home/hr-home.component';
import { HrAccountComponent } from '../hr-account/hr-account.component';

@Component({
  selector: 'app-hr-dashboard',
  standalone: true,
  imports: [CommonModule,
            RouterModule,
            RouterOutlet,
           
           ],
  templateUrl: './hr-dashboard.component.html',
  styleUrl: './hr-dashboard.component.scss'
})
export class HrDashboardComponent {
  //value:boolean=false;
  comp:any;
  user:any;
  ngOnInit(){
    let data:any = localStorage.getItem('token');
    this.user = JSON.parse(data);

    this.comp = HrHomeComponent
  }

  detectComp(comp:any){
    if(comp === "hr-home"){
      this.comp = HrHomeComponent
    }
    if(comp === "hr-account"){
      this.comp = HrAccountComponent
    }
    if(comp === "create-employee"){
      this.comp = CreateEmployeeComponent
    }
    if(comp === "leave-list"){
      this.comp = LeaveListComponent
    }
    if(comp === "employee-list"){
      this.comp = EmployeeListComponent
    }
    if(comp === "leave-chart"){
      this.comp = ChartsComponent
    }
    if(comp === "activity-chart"){
      this.comp = ActivityChartComponent
    }
  }
  

  constructor(public jsondatacon:AuthService,){}
  logout(){
    this.jsondatacon.userLogout();
  }

}
