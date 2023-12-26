import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { EmpLeaveComponent } from '../emp-leave/emp-leave.component';
import { EmpLeaveDetailsComponent } from '../emp-leave-details/emp-leave-details.component';
import { EmpSettingsComponent } from '../emp-settings/emp-settings.component';
import { EmpProfileComponent } from '../emp-profile/emp-profile.component';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule,EmpLeaveComponent],
  providers:[AuthService],
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.scss'
})
export class EmployeeDashboardComponent {
  user: any;
  comp:any;
  constructor(public jsondatacon:AuthService,){}

  ngOnInit(){
    this.user= localStorage.getItem('token');
    this.comp = EmpProfileComponent
    //debugger;
   }
  

  detectComp(comp:any){
    if(comp === "emp-profile"){
      this.comp = EmpProfileComponent
    }
    if(comp === "emp-leave"){
      this.comp = EmpLeaveComponent
    }
    if(comp === "emp-leave-details"){
      this.comp = EmpLeaveDetailsComponent
    }
    if(comp === "emp-settings"){
      this.comp = EmpSettingsComponent
    }
    
    
  }

  logout() {
    this.jsondatacon.userLogout();
  }

}
