import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import { LoginComponent } from './Components/login/login.component';
// import { CreateEmployeeComponent } from './Components/HR/create-employee/create-employee.component';
import { HomeComponent } from './Components/HR/hr-dashboard/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'employee-management';
}
