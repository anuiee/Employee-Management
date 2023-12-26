
//This service performs CRUD operations among employee details

import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { login } from '../data-type';
// import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JsonConnectionService {

  constructor(private http:HttpClient,private route:Router) { }

  userIsLoggedIn(): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    throw new Error('Method not implemented.');
  }
   isEmployeeLogedIn=new BehaviorSubject<boolean>(false);
   isLoginError=new EventEmitter<boolean>(false);
  

  url = "http://localhost:3000/logindata/";
  authenticate(){
    return this.http.get<any>(this.url);
  }
 
  saveUser(inputData: object){
    console.log('saving',this.http.post<any>(this.url,inputData));
    return this.http.post<any>(this.url,inputData,{observe: 'response'});
    // observe : 'data';
   }

   GetAll(){
    return this.http.get(this.url);
   }
   GetById(code:any){
    return this.http.get(this.url+'/'+code);
   }

   GetUserRole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
   }
  
   

getData(): Observable<any> {
    
    return this.http.get<any>(this.url);
 }
 getOneData(empId : any) {
  return this.http.get(`http://localhost:3000/logindata/${empId}`);
}

 deletePost(id : number): Observable<number> {
  console.log('deleted',id);
  //  this.http.delete<any>(this.url + id).splice(id,1);
   return this.http.delete<any>(this.url + id);   
}
updateEmployee(inputData:object,empId:number) {
  return this.http.put(`http://localhost:3000/logindata/${empId}`,inputData);

}

enable(id : number,value:boolean) {
console.log('val',value);

  const putStatusTrue = {
    activity: 'Active'
  };
  const putStatusFalse = {
    activity: 'Disabled'
  };
  if(value != false)
    return this.http.patch(this.url+'/'+id,putStatusTrue);  
  else
    return this.http.patch(this.url+'/'+id,putStatusFalse);  

}

  updateprofile(input:any,id:any){
      console.log('input',input);
      return this.http.patch(this.url+'/'+id,input);
     
  }
  editPassword(input:any,id:any){
    this.route.navigate(['/login']);
    return this.http.patch(this.url+'/'+id,input);
    
  }
}



