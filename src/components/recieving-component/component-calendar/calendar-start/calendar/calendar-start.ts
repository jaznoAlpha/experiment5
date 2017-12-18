import { Component, OnChanges } from '@angular/core';

//Ionic
import { Events } from 'ionic-angular';

@Component({
  selector: 'calendar-start',
  templateUrl: 'calendar-start.html'
})
export class CalendarStartComponent implements OnChanges {

  dates: Date[] = [];
  now = new Date();
  monthShowing: number;
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  isCurrMonth: boolean;
  currdate: Date;
  selectedDate: Date;
  monthYear: boolean = false;
  state: string = 'initial';

  constructor(public events: Events) {
    this.currdate = new Date();
    this.currdate.setHours(0);
    this.currdate.setMinutes(0);
    this.currdate.setSeconds(0);
    this.currdate.setMilliseconds(0);
    this.setup();
  }

  ngOnChanges() {
    this.monthYear;
  }

  setup(newDate?) {
    // this.selectedDate = newDate ? newDate : this.now;
    this.dates = [];
    this.now.setDate(1);
    this.monthShowing = this.now.getMonth();
    let today = -(this.now.getDay());
    for (let i = 0; i < 35; i++) {
      let d = new Date(this.now);
      d.setHours(0);
      d.setMinutes(0);
      d.setSeconds(0);
      d.setMilliseconds(0);
      d["isToday"] = false;
      d["isCurrMonth"] = false;
      d.setDate(d.getDate() + today++);
      if (d.toDateString() === this.currdate.toDateString()) {
        d["isToday"] = true;
      }
      if (d.getMonth() === this.now.getMonth()) {
        d["isCurrMonth"] = true;
      }
      this.dates.push(d);
    }
  }

  onDate(date) {
    this.events.publish('startDate', date);
  }

  onPrev() {
    this.monthShowing = this.now.getMonth() - 1;
    this.now.setMonth(this.monthShowing);
    this.setup(this.now);
  }

  onNext() {
    this.monthShowing = this.now.getMonth() + 1;
    this.now.setMonth(this.monthShowing);
    this.setup(this.now);
  }

  //this is typescript related to the month-and-year component

  onMonthYear() {
    this.monthYear = !this.monthYear;
  }

  monthYearMonthHandle(monthNum: number) {
    this.now.setMonth(monthNum);
    this.setup(this.now);
  }

  monthYearYearHandle(yearNum: number) {
    this.now.setFullYear(yearNum);
    this.setup(this.now);
  }
  
}