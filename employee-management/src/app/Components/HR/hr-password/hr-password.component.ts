import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonConnectionService } from '../../../Services/json-connection.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hr-password',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './hr-password.component.html',
  styleUrl: './hr-password.component.scss'
})
export class HrPasswordComponent {
  constructor(private jsondata:JsonConnectionService){} 
  user:any;

  ngOnInit(){
  
     let data:any = localStorage.getItem('token');
     this.user = JSON.parse(data);
     console.log('user',this.user[0].username);

   } 

  myForm = new FormGroup({
    password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z0-9@]+$')]),
   // confirmPassword:new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z0-9]+$')])
   
  })



  get password(){
    return this.myForm.get('password');
  }

  getPassword(){

    console.log('data',this.myForm.value);
    this.jsondata.editPassword(this.myForm.value,this.user[0].id).subscribe({
      next: ((res:any)=>{
        console.log(res);
        alert('Password Updated')
        
      })  
});
this.myForm.reset();
}
}
