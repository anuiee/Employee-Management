import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateEmployeeComponent } from '../../create-employee/create-employee.component';
import { LoginComponent } from '../../../login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CreateEmployeeComponent,LoginComponent,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
