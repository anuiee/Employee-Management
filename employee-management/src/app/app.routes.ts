import { Routes } from '@angular/router';
import { HrDashboardComponent } from './Components/HR/hr-dashboard/hr-dashboard.component';
import { EmployeeDashboardComponent } from './Components/EMPLOYEE/employee-dashboard/employee-dashboard.component';
 import { LoginComponent } from './Components/login/login.component';
import { CreateEmployeeComponent } from './Components/HR/create-employee/create-employee.component';
import { HomeComponent } from './Components/HR/hr-dashboard/home/home.component';
import { authGuard } from './Guard/auth.guard';
import { EmployeeListComponent } from './Components/HR/employee-list/employee-list.component';
import { EditListComponent } from './Components/HR/edit-list/edit-list.component';
import { EmpLeaveComponent } from './Components/EMPLOYEE/emp-leave/emp-leave.component';
import { LeaveListComponent } from './Components/HR/leave-list/leave-list.component';
import { ChartsComponent } from './Components/charts/charts.component';
import { ActivityChartComponent } from './Components/activity-chart/activity-chart.component';
import { EmpLeaveDetailsComponent } from './Components/EMPLOYEE/emp-leave-details/emp-leave-details.component';
import { EmpSettingsComponent } from './Components/EMPLOYEE/emp-settings/emp-settings.component';
import { EditProfileComponent } from './Components/EMPLOYEE/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './Components/EMPLOYEE/change-password/change-password.component';
import { HrHomeComponent } from './Components/HR/hr-home/hr-home.component';
import { TotalEmployeesComponent } from './Components/HR/total-employees/total-employees.component';
import { EmpProfileComponent } from './Components/EMPLOYEE/emp-profile/emp-profile.component';
import { ViewLeaveComponent } from './Components/HR/view-leave/view-leave.component';
import { HrAccountComponent } from './Components/HR/hr-account/hr-account.component';
import { HrPasswordComponent } from './Components/HR/hr-password/hr-password.component';


export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'hr-dashboard',
        canActivate:[authGuard],
        component:HrDashboardComponent,
        children:[
        {
            path:'create-employee',
            component:CreateEmployeeComponent,
        } ,
        {
            path:'employee-list',
            canActivate:[authGuard],
            component:EmployeeListComponent,
        },
        {
            path:'leave-list',
            component:LeaveListComponent,
        }, 
        {
            path:'leave-chart',
            component:ChartsComponent
        } ,
        {
            path:'activity-chart',
            component:ActivityChartComponent
        },  {
            path:'hr-home',
            component:HrHomeComponent
        } ,
        {
            path:'hr-account',
            component:HrAccountComponent,
        },
       
    ]
    },
    {
        path:'edit',
        canActivate:[authGuard],
        component:EditListComponent
    },
    {
        path:'view-leave',
        canActivate:[authGuard],
        component:ViewLeaveComponent
    },
    {
        path:'employee-dashboard',
        canActivate:[authGuard],
        component:EmployeeDashboardComponent,

        children:[
        { 
            path:'emp-leave',
            component:EmpLeaveComponent,
        } ,
        {
            path:'emp-leave-details',
            component:EmpLeaveDetailsComponent,
        },
        {
            path:'emp-settings',
            component:EmpSettingsComponent,
        },
        {
            path:'emp-profile',
            component:EmpProfileComponent,
        }
    ]

    },   
        {
            path:'hr-password',
            canActivate:[authGuard],
            component:HrPasswordComponent
        } ,
        {
            path:'edit-profile',
            canActivate:[authGuard],
            component:EditProfileComponent
        } ,
        {
            path:'change-password',
            canActivate:[authGuard],
            component:ChangePasswordComponent
        } ,
        {
            path:'total-employees',
            canActivate:[authGuard],
            component:TotalEmployeesComponent
        } 

    
];
