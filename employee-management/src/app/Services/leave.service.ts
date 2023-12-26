
//This service perform Approve or Reject functions on employee leave applications


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http:HttpClient,private route:Router) { }
  url = "http://localhost:3000/leave_register";

  leave_app(inputData: object){
    console.log('saving',this.http.post<any>(this.url,inputData));
    return this.http.post<any>(this.url,inputData,{observe: 'response'});
    // observe : 'data';
   }

   getData(): Observable<any> {
    
    return this.http.get<any>(this.url);
 }
 getOneData(empId : any) {
  return this.http.get(`http://localhost:3000/logindata/${empId}`);
}

 reject(id : number) {

  const putStatus = {
    status: 'Rejected'
  };
  return this.http.patch(this.url+'/'+id,putStatus);
   
}

approve(id : number) {

  const putStatus = {
    status: 'Approved'
  };
  return this.http.patch(this.url+'/'+id,putStatus);
   
}

getChartInfo(){
  return this.http.get(this.url);
}

getLeaveData(id:any){
  return this.http.get<any>(`http://localhost:3000/leave_register?userid=${id}`);
}
}
