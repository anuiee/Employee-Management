import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonConnectionService } from '../../../Services/json-connection.service';
import {  HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  providers:[JsonConnectionService],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss'
})
export class CreateEmployeeComponent {
  constructor(private jsondata:JsonConnectionService){
    // 
    
  } 

  myForm = new FormGroup({
    username:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z .]+$')]),
    age:new FormControl('',[Validators.required,Validators.pattern('[0-9]+$'),Validators.min(18),Validators.maxLength(2)]),
    blood_grp:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z +-]+$')]),
    gender:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]+$')]),
    image:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    role:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z0-9@.]+$')])

  })
get user(){
  return this.myForm.get('username');
}

get password(){
  return this.myForm.get('password');
}
get agefun(){
  return this.myForm.get('age');
}
get dobfun(){
  return this.myForm.get('dob');
}
get blood_grp_fun(){
  return this.myForm.get('blood_grp');
}
get role_fun(){
  return this.myForm.get('role');
}
get image_fun(){
  return this.myForm.get('image');
}
get phone_fun(){
  return this.myForm.get('phone');
}

get emailId(){
  return this.myForm.get('email');
}

get gender_fun(){
  return this.myForm.get('gender');
}


  getUserData(){

    console.log('data',this.myForm.value);
    this.jsondata.saveUser(this.myForm.value).subscribe({
      next: ((res:any)=>{
        console.log(res);
        alert('New member added')
        
      })
    
      
     
    
});
this.myForm.reset();
}
}
