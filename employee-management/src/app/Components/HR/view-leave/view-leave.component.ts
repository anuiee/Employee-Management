import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { LeaveService } from '../../../Services/leave.service';
import { HttpClientModule } from '@angular/common/http';
// import { ActivatedRoute, Route, Router } from '@angular/router';
import { PassDataService } from '../../../Services/pass-data.service';
import { LeaveService } from '../../../Services/leave.service';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-leave',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './view-leave.component.html',
  styleUrl: './view-leave.component.scss'
})
export class ViewLeaveComponent implements OnInit{
  // user:any;
  empId:any={};
  // subscription!: Subscription ;
  jsonData:any;
  //empId:any;
  // constructor(private passdataService:PassDataService, private leavedata:LeaveService,private route:ActivatedRoute,private route1:Router){} 
     constructor(private passdataService:PassDataService,private leavedata :LeaveService){} 

  
  ngOnInit():void{

    this.passdataService.cast.subscribe((value) => {
      this.empId = value;
      console.log('userVal',this.empId);
      
    }); 


     this.leavedata.getLeaveData(this.empId).subscribe((data2)=>{
      this.jsonData=data2;
      console.log('jsondatahere',this.jsonData);
    });

  } 
 
}

    // this.empId=this.route.snapshot.paramMap.get('id');

    // this.leavedata.getLeaveData(this.empId).subscribe((data2)=>{
    //   this.jsonData=data2;
    //   console.log('jsondatahere',this.jsonData);
    // });

  
    // console.log('userVal',this.userVal);
    // this.passdataService.user$.subscribe(value => {
    //   console.log('view',value);
    //   this.userVal = value;
    // });
    
 
