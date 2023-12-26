import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { JsonConnectionService } from '../../../Services/json-connection.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent {
  empId! :any;
  employee :any;
    constructor(private route:ActivatedRoute,private jsonService:JsonConnectionService){}

    user:any;

    ngOnInit(){
    
       let data:any = localStorage.getItem('token');
       this.user = JSON.parse(data);
       console.log('user',this.user[0].username);

       this.jsonService.getOneData(this.user[0].id).subscribe((res:any)=>{
        console.log(res);
        this.employee = res
     } );
    }

    updateUserData(form:any){
        var inputData={
          age:this.employee.age,
          blood_grp:this.employee.blood_grp,
          phone:this.employee.phone,
          gender:this.employee.gender,
          dob:this.employee.dob
        }

        this.jsonService.updateprofile(inputData,this.user[0].id).subscribe({
          next: ((res:any)=>{
            console.log(res);
            alert('updated')
            
          })
        });
        form.reset();
    }

}
