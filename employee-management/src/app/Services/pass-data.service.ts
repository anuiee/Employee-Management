import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PassDataService {

  constructor() { }
  private user = new BehaviorSubject<any>(null);
  cast = this.user.asObservable();


  passData(value:any){
    //console.log('this',this.user.next(value));
    this.user.next(value);
    //console.log('user',value);
    //
    console.log('cast',this.cast);
    
  }
}
