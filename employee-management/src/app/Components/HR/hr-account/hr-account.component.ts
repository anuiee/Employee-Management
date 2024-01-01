import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JsonConnectionService } from '../../../Services/json-connection.service';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hr-account',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './hr-account.component.html',
  styleUrl: './hr-account.component.scss'
})
export class HrAccountComponent {
  user:any;
 
  constructor(private route:ActivatedRoute,private jsonService:JsonConnectionService){}

  ngOnInit(){
   
    let data:any = localStorage.getItem('token');
    this.user = JSON.parse(data);
    console.log('user',this.user[0].username);

  }
}
