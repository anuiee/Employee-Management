import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LeaveService } from '../../../Services/leave.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-emp-leave',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  providers:[LeaveService],
  templateUrl: './emp-leave.component.html',
  styleUrl: './emp-leave.component.scss'
})
export class EmpLeaveComponent {
  user :any;
  constructor(private jsondata:LeaveService){}
  leaveForm = new FormGroup({
    leave_type:new FormControl('',[Validators.required]),
    reason:new FormControl('',[Validators.required]),
    fromDate:new FormControl('',[Validators.required]),
    toDate:new FormControl('',[Validators.required]),
    userid:new FormControl('',[Validators.required]),
  })

  get type(){
    return this.leaveForm.get('leave_type');
  }
  get reason_fun(){
    return this.leaveForm.get('reason');
  }
  get from_Date(){
    return this.leaveForm.get('fromDate');
  }
  get to_Date(){
    return this.leaveForm.get('toDate');
  }


userid:any;

   ngOnInit(){
   
      let data:any = localStorage.getItem('token');
      this.user = JSON.parse(data);
      console.log('user',this.user[0].username);
    } 
  
  applyLeave(){

    console.log('data',this.leaveForm.value);
    this.jsondata.leave_app(this.leaveForm.value).subscribe({
      next: ((res:any)=>{
        console.log(res);
        alert('Leave Submitted');
        
      })  
});
this.leaveForm.reset();
}

}
