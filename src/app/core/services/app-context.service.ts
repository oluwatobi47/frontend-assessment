import { Injectable } from '@angular/core';
import {USER_ACCOUNT} from "./mock-data";
import {BehaviorSubject, Observable} from "rxjs";

/*
* Created this class to handle state management for the application, NgRx could be adopted for a
* */

@Injectable({
  providedIn: 'root'
})
export class AppContextService {

  private activeDashboardMenu: any;
  private activeDashboardDataObs: BehaviorSubject<any> = new BehaviorSubject<any>(  {
    key: 'BITFOREX',
    value: 'bitforex.com',
    label: 'Bit Forex',
    icon: '/assets/logos/bitcoin.svg'
  });

  constructor() { }

  getActiveDashboardMenu(){
    return this.activeDashboardMenu;
  }

  getActiveDashboardMenuObs(): Observable<any>{
    return this.activeDashboardDataObs.asObservable();
  }

  setActiveDashboardMenu(data: any) {
    this.activeDashboardMenu = data;
    this.activeDashboardDataObs.next(data);
  }


  getUserInfo(): any {
    return USER_ACCOUNT;
  }

}
