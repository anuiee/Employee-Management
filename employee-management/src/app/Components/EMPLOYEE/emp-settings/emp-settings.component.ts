import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { JsonConnectionService } from '../../../Services/json-connection.service';
import { FormsModule } from '@angular/forms';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-emp-settings',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet,EditProfileComponent,RouterModule],
  templateUrl: './emp-settings.component.html',
  styleUrl: './emp-settings.component.scss'
})
export class EmpSettingsComponent {
  user:any;
  profile:boolean=false;
  empId! :any;
  employee :any;
  constructor(private route:ActivatedRoute,private jsonService:JsonConnectionService){}

  ngOnInit(){
   
    let data:any = localStorage.getItem('token');
    this.user = JSON.parse(data);
    console.log('user',this.user[0].username);

  } 


}
