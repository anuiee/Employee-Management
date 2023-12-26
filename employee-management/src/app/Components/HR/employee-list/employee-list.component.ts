import { Component } from '@angular/core';
import { JsonConnectionService } from '../../../Services/json-connection.service';
import { CommonModule } from '@angular/common';
import { EditListComponent } from '../edit-list/edit-list.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule,
            EditListComponent,
            RouterModule,
            RouterOutlet,HttpClientModule,
            FormsModule
          ],
  providers:[JsonConnectionService],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  constructor(private jsondatacon:JsonConnectionService){}
  public jsonData: any;
  public jsonDatabyId :any;
  mySwitch: boolean = false;

  ngOnInit():void{
    this.jsondatacon.getData().subscribe((data2)=>{
      this.jsonData=data2;
      console.log('json',this.jsonData);
    });
         
  }
  getDataFromAPI(){
    this.jsondatacon.getData().subscribe((data)=>{
      this.jsonData=data;
      console.log(data);
      
    });
  }
  delete(index:number){
    if(confirm('Are you sure you want to delete this data?')){
      this.jsondatacon.deletePost(index).subscribe((res: any)=>{
        console.log('view id',index);
       console.log('result',res);
       this.getDataFromAPI();
      //  alert(res.message)
      
      });
    } 
  }
 
  activate(index:number){
 
      this.mySwitch=!this.mySwitch;
      console.log(this.mySwitch);
          this.jsondatacon.enable(index,this.mySwitch).subscribe((res: any)=>{
            console.log('view id',index);
           console.log('result',res);
           this.getDataFromAPI();
          });
    }
  

 
  



  
}
