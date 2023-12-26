import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LeaveService } from '../../../Services/leave.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-emp-leave-details',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './emp-leave-details.component.html',
  styleUrl: './emp-leave-details.component.scss'
})
export class EmpLeaveDetailsComponent {
  user:any;
  jsonData:any;
  constructor(private leavedata:LeaveService){} 
  ngOnInit(){
   
    let data:any = localStorage.getItem('token');
    this.user = JSON.parse(data);
    console.log('user',this.user[0].username,this.user[0].id);

    this.leavedata.getLeaveData(this.user[0].id).subscribe((data2)=>{
      this.jsonData=data2;
      console.log('jsondatahere',this.jsonData);
    });

  } 
 


}
