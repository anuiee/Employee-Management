import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { JsonConnectionService } from '../../../Services/json-connection.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-edit-list',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule,RouterOutlet,HttpClientModule],
  providers:[JsonConnectionService],
  templateUrl: './edit-list.component.html',
  styleUrl: './edit-list.component.scss'
})
export class EditListComponent {
  empId! :any;
  employee :any;
    constructor(private route:ActivatedRoute,private jsonService:JsonConnectionService){}


  
    ngOnInit(){
        this.empId=this.route.snapshot.paramMap.get('id')
        // alert(this.empId);

        this.jsonService.getOneData(this.empId).subscribe((res:any)=>{
          console.log(res);
          this.employee = res
         // debugger;
        })
    }

    updateUserData(form:any){
        var inputData={
          username:this.employee.username,
          email:this.employee.email,
          age:this.employee.age,
          role:this.employee.role,
          blood_grp:this.employee.blood_grp,
          phone:this.employee.phone,
          gender:this.employee.gender,
          image:this.employee.image,
          password:this.employee.password,
          dob:this.employee.dob
        }

        this.jsonService.updateEmployee(inputData,this.empId).subscribe({
          next: ((res:any)=>{
            console.log(res);
            alert('updated')
            
          })
        });
        form.reset();
    }
}
