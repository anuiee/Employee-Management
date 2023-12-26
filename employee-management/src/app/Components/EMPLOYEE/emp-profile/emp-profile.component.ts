import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { JsonConnectionService } from '../../../Services/json-connection.service';

@Component({
  selector: 'app-emp-profile',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './emp-profile.component.html',
  styleUrl: './emp-profile.component.scss'
})
export class EmpProfileComponent {
  user: any;
  ngOnInit(){
   
    let data:any = localStorage.getItem('token');
    this.user = JSON.parse(data);
    console.log('user',this.user[0].username);

  } 
}
