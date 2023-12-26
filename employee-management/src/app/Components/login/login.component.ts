import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonConnectionService } from '../../Services/json-connection.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { EmployeeDashboardComponent } from '../EMPLOYEE/employee-dashboard/employee-dashboard.component';
import { login } from '../../data-type';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule,EmployeeDashboardComponent,RouterModule],
  providers:[AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userdata:any ;
   authError:String ="";

  constructor(public jsondatacon:AuthService,private builder:FormBuilder){
    // sessionStorage.clear();
  }

  loginForm = this.builder.group({
    email:this.builder.control('',[Validators.required,Validators.email]),
    password:this.builder.control('',[Validators.required]),
    

  })
  
get userEmail(){
 
  return this.loginForm.get('email');
}

get password(){
 
  return this.loginForm.get('password');
  
}

login(data:login):void{
  console.log('data',this.loginForm.value);
  this.jsondatacon.userLogin(data);
  this.jsondatacon.isLoginError.subscribe((isError)=>{
        if(isError){
          this.authError="Email or Password is not correct";
        }
  })
 
   
  
}


}
