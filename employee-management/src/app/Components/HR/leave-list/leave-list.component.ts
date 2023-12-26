import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LeaveService } from '../../../Services/leave.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-leave-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
providers:[LeaveService],
  templateUrl: './leave-list.component.html',
  styleUrl: './leave-list.component.scss'
})
export class LeaveListComponent {
  constructor(private jsondatacon:LeaveService){}
  public jsonData: any;
  public jsonDatabyId :any;
  public currentStatus:any;
  ngOnInit():void{
    this.jsondatacon.getData().subscribe((data2)=>{
      this.jsonData=data2;
      console.log(data2);
    });
         
  }
  getDataFromAPI(){
    this.jsondatacon.getData().subscribe((data)=>{
      this.jsonData=data;
      console.log(data);
      
    });
  }


  rejectLeave(index:number){
    if(confirm('Are you sure you want to reject?')){
      this.jsondatacon.reject(index).subscribe((res: any)=>{
        console.log('view id',index);
       console.log('result',res);
       this.getDataFromAPI();
       
      });
    } 
    }

  approveLeave(index:number){
    if(confirm('Are you sure you want to reject?')){
      this.jsondatacon.approve(index).subscribe((res: any)=>{
        console.log('view id',index);
       console.log('result',res);
       alert("LeaveApproved");
       this.getDataFromAPI();
      
      });
    }
  }

}


