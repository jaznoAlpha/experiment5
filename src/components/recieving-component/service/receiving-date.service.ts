import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ReceivingDateService {
    startMonth;
    startDay;
    startYear;
    endMonth;
    endDay;
    endYear;

    constructor() {
        this.startMonth = new Date().getMonth()+1;
        this.startDay = new Date().getDate();
        this.startYear = new Date().getFullYear();
        this.endMonth = new Date().getMonth()+1;
        this.endDay = new Date().getDate();
        this.endYear = new Date().getFullYear();
    }

  // Observable navItem source
  private itemSource = new BehaviorSubject<number>(0);
  // Observable navItem stream
  navItem$ = this.itemSource.asObservable();
  // service command
  changeNav(number) {
    this.itemSource.next(number);
  }

    setDate(e){
    }

}

