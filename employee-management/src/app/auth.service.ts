
//this service used to authenticate the user

import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login } from './data-type';
import { BehaviorSubject } from 'rxjs';
import { debug } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private route:Router) { }
  public jsonId:any;
  
  url = "http://localhost:3000/logindata";

  public isAuthenticated=false;
  isEmployeeLoggedIn=new BehaviorSubject<boolean>(false);

  isLoginError = new EventEmitter<boolean>(false);

   isLoggedIn() {
    const token = localStorage.getItem('token'); // get token from local storage
    console.log('token',token);
    return token;
   }
 
  
  saveUser(inputData: object) {
    console.log('saving',this.http.post<any>(this.url,inputData));
    return this.http.post<any>(this.url,inputData,{observe: 'response'});
   }



   userLogin(data:login) {
      console.log('service',data);
      this.http.get(`http://localhost:3000/logindata?email=${data.email}&password=${data.password}`,
      {observe:'response'}
      ).subscribe((result:any)=>{
      console.log('res',result);
      if(result?.body?.length) {
        if(result.body[0].role ==='admin'){
          // debugger;
          localStorage.setItem('token',JSON.stringify(result.body));
          this.route.navigate(['/hr-dashboard']);
          console.log("user logged");
        }
        else if(result.body[0].role ==='employee') {
          localStorage.setItem('token',JSON.stringify(result.body));
          this.route.navigate(['/employee-dashboard']);
          this.jsonId=result.body[0].id;
          console.log(this.jsonId);
           //debugger;
          console.log("user logged");
        }

      }
      else{
        localStorage.clear();
        console.warn("login failed");
        this.route.navigate(['/login']);
        this.isLoginError.emit(true); 
      }
     })
    
   }


   getById(){
    return localStorage.getItem('token');
 }

  userLogout() {
    localStorage.clear();
    this.route.navigate(['/login']);
    
   
   }
   getChartInfo(){
    return this.http.get(this.url);
  }

}
