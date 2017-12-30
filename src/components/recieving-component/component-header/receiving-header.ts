import { Component } from '@angular/core';

//Ionic
import { Events } from 'ionic-angular';

//Service
import { ReceivingDateService } from '../service/receiving-date.service';


@Component({
  selector: 'receiving-header',
  templateUrl: 'receiving-header.html',
  providers: [ReceivingDateService]
})
export class ReceivingHeaderComponent {

  today = new Date();
  yesterday = new Date();
  tomorrow = new Date();
  
  begWeek = new Date();
  endWeek = new Date();
  begLastWeek = new Date();
  endLastWeek = new Date();
  begNextWeek = new Date();
  endNextWeek = new Date();

  begMonth = new Date();
  endMonth = new Date();
  begNextMonth = new Date();
  endNextMonth = new Date();
  begLastMonth = new Date();
  endLastMonth = new Date();

  begYear = new Date();
  endYear = new Date();
  begLastYear = new Date();
  endLastYear = new Date();
  begNextYear = new Date();
  endNextYear = new Date();

  begQuarter = new Date();
  endQuarter = new Date();
  lastQuarterBeg = new Date();
  lastQuarterEnd = new Date();
  nextQuarterBeg = new Date();
  nextQuarterEnd = new Date();

  startDate = new Date();
  endDate = new Date();
  


  constructor(private dateservice: ReceivingDateService,
              private events: Events) {
    //Set Today
    this.today.setHours(0);
    this.today.setMinutes(0);
    this.today.setSeconds(0);
    this.today.setMilliseconds(0);
    //Set Yesterday
    this.yesterday.setTime(this.today.getTime()-86400000);
    //Set Tomorrow
    this.tomorrow.setTime(this.today.getTime()+86400000);
    //Set Week
    this.begWeek.setTime(this.today.getTime()-(this.today.getDay()*86400000));
    this.endWeek.setTime(this.begWeek.getTime()+(6*86400000));
    this.begLastWeek.setTime(this.begWeek.getTime()-(7*86400000));
    this.endLastWeek.setTime(this.endWeek.getTime()-(7*86400000));
    this.begNextWeek.setTime(this.begWeek.getTime()+(7*86400000));
    this.endNextWeek.setTime(this.endWeek.getTime()+(7*86400000));
    //Presets for Set Month
    this.begNextMonth.setDate(1);
    this.begNextMonth.setMonth(this.today.getMonth()+1);
    this.begNextMonth.setHours(0);
    this.begNextMonth.setMinutes(0);
    this.begNextMonth.setSeconds(0);
    this.begNextMonth.setMilliseconds(0);
    this.endNextMonth.setDate(1);
    this.endNextMonth.setMonth(this.today.getMonth()+2);
    this.endNextMonth.setHours(0);
    this.endNextMonth.setMinutes(0);
    this.endNextMonth.setSeconds(0);
    this.endNextMonth.setMilliseconds(0);
    this.begLastMonth.setDate(1);
    this.begLastMonth.setMonth(this.today.getMonth()-1);
    this.begLastMonth.setHours(0);
    this.begLastMonth.setMinutes(0);
    this.begLastMonth.setSeconds(0);
    this.begLastMonth.setMilliseconds(0);
    //Set Month
    this.begMonth.setTime(this.today.getTime()-(this.today.getDate()-1)*86400000);
    this.endMonth.setTime(this.begNextMonth.getTime() - 86400000);
    this.endNextMonth.setTime(this.endNextMonth.getTime() - 86400000);
    this.endLastMonth.setTime(this.begMonth.getTime() - 86400000);
    //Quarters
    this.currentQuarter();
    //Presets for Set Year
    this.begYear.setDate(1);
    this.begYear.setMonth(0);
    this.begYear.setHours(0);
    this.begYear.setMinutes(0);
    this.begYear.setSeconds(0);
    this.begYear.setMilliseconds(0);
    this.begLastYear.setDate(1);
    this.begLastYear.setMonth(0);
    this.begLastYear.setFullYear(this.today.getFullYear()-1);
    this.begLastYear.setHours(0);
    this.begLastYear.setMinutes(0);
    this.begLastYear.setSeconds(0);
    this.begLastYear.setMilliseconds(0);
    this.begNextYear.setDate(1);
    this.begNextYear.setMonth(0);
    this.begNextYear.setFullYear(this.today.getFullYear()+1);
    this.begNextYear.setHours(0);
    this.begNextYear.setMinutes(0);
    this.begNextYear.setSeconds(0);
    this.begNextYear.setMilliseconds(0);
    this.endNextYear.setDate(1);
    this.endNextYear.setMonth(0);
    this.endNextYear.setFullYear(this.today.getFullYear()+2);
    this.endNextYear.setHours(0);
    this.endNextYear.setMinutes(0);
    this.endNextYear.setSeconds(0);
    this.endNextYear.setMilliseconds(0);
    //Set Year
    this.endYear.setTime(this.begNextYear.getTime()-86400000);
    this.endLastYear.setTime(this.begYear.getTime()-86400000);
    this.endNextYear.setTime(this.endNextYear.getTime()-86400000);
    //Initialize Start and Date Variables
    this.startDate.setTime(this.today.getTime());
    this.endDate.setTime(this.today.getTime());
    //Event Subscriptions from Calendar Button events
    events.subscribe('endDate', (date) => {
      this.endDate = date;
      this.checkDates(date);
    });
    events.subscribe('startDate', (date) => {
      this.startDate = date;
      this.checkDates(date);
    });
  }

  onChange(val) {
    if (val == 0) { //Today
      this.events.publish('RHdropdownStart', this.today);
      this.events.publish('RHdropdownEnd', this.today);
    }
    else if (val == 1) { //Yesterday
      this.events.publish('RHdropdownStart', this.yesterday);
      this.events.publish('RHdropdownEnd', this.yesterday);
    }
    else if (val == 2) { //Tomorrow
      this.events.publish('RHdropdownStart', this.tomorrow);
      this.events.publish('RHdropdownEnd', this.tomorrow);
    }
    else if (val == 3) { //This Week
      this.events.publish('RHdropdownStart', this.begWeek);
      this.events.publish('RHdropdownEnd', this.endWeek);
    }
    else if (val == 4) { //Last Week
      this.events.publish('RHdropdownStart', this.begLastWeek);
      this.events.publish('RHdropdownEnd', this.endLastWeek);
    }
    else if (val == 5) { //Next Week
      this.events.publish('RHdropdownStart', this.begNextWeek);
      this.events.publish('RHdropdownEnd', this.endNextWeek);
    }
    else if (val == 6) { //This Month
      this.events.publish('RHdropdownStart', this.begMonth);
      this.events.publish('RHdropdownEnd', this.endMonth);
    }
    else if (val == 7) { //Last Month
      this.events.publish('RHdropdownStart', this.begLastMonth);
      this.events.publish('RHdropdownEnd', this.endLastMonth);
    }
    else if (val == 8) { //Next Month
      this.events.publish('RHdropdownStart', this.begNextMonth);
      this.events.publish('RHdropdownEnd', this.endNextMonth);
    }
    else if (val == 9) { //This Quarter
      this.events.publish('RHdropdownStart', this.begQuarter);
      this.events.publish('RHdropdownEnd', this.endQuarter);
    }
    else if (val == 10) { //Last Quarter
      this.events.publish('RHdropdownStart', this.lastQuarterBeg);
      this.events.publish('RHdropdownEnd', this.lastQuarterEnd);
    }
    else if (val == 11) { //Next Quarter
      this.events.publish('RHdropdownStart', this.nextQuarterBeg);
      this.events.publish('RHdropdownEnd', this.nextQuarterEnd);
    }
    else if (val == 12) { //This Year
      this.events.publish('RHdropdownStart', this.begYear);
      this.events.publish('RHdropdownEnd', this.endYear);
    }
    else if (val == 13) { //Last Year
      this.events.publish('RHdropdownStart', this.begLastYear);
      this.events.publish('RHdropdownEnd', this.endLastYear);
    }
    else if (val == 14) { //Next Year
      this.events.publish('RHdropdownStart', this.begNextYear);
      this.events.publish('RHdropdownEnd', this.endNextYear);
    }
  }

  checkDates(date) {
    let el:any = document.getElementById("replaceText");
    let dateChecked = date.getDate();
    //Today:
    if ((this.startDate.getTime() == this.today.getTime()) && (this.endDate.getTime() == this.today.getTime())) {
      el.selectedIndex = 0;
    }
    //Yesterday:
    else if ((this.startDate.getTime() == this.yesterday.getTime()) && (this.endDate.getTime() == this.yesterday.getTime())) {
      el.selectedIndex = 1;
    }
    //Tomorrow:
    else if ((this.startDate.getTime() == this.tomorrow.getTime()) && (this.endDate.getTime() == this.tomorrow.getTime())) {
      el.selectedIndex = 2;
    }
    //This Week:
    else if ((this.startDate.getTime() == this.begWeek.getTime()) && (this.endDate.getTime() == this.endWeek.getTime())) {
      el.selectedIndex = 3;
    }
    //Last Week:
    else if ((this.startDate.getTime() == this.begLastWeek.getTime()) && (this.endDate.getTime() == this.endLastWeek.getTime())) {
      el.selectedIndex = 4;
    }
    //Next Week:
    else if ((this.startDate.getTime() == this.begNextWeek.getTime()) && (this.endDate.getTime() == this.endNextWeek.getTime())) {
      el.selectedIndex = 5;
    }
    //This Month:
    else if ((this.startDate.getTime() == this.begMonth.getTime()) && (this.endDate.getTime() == this.endMonth.getTime())) {
      el.selectedIndex = 6;
    }
    //Last Month:
    else if ((this.startDate.getTime() == this.begLastMonth.getTime()) && (this.endDate.getTime() == this.endLastMonth.getTime())) {
      el.selectedIndex = 7;
    }
    //Next Month:
    else if ((this.startDate.getTime() == this.begNextMonth.getTime()) && (this.endDate.getTime() == this.endNextMonth.getTime())) {
      el.selectedIndex = 8;
    }
    //This Quarter:
    else if ((this.startDate.getTime() == this.begQuarter.getTime()) && (this.endDate.getTime() == this.endQuarter.getTime())) {
      el.selectedIndex = 9;
    }
    //Last Quarter:
    else if ((this.startDate.getTime() == this.lastQuarterBeg.getTime()) && (this.endDate.getTime() == this.lastQuarterEnd.getTime())) {
      el.selectedIndex = 10;
    }
    //Next Quarter:
    else if ((this.startDate.getTime() == this.nextQuarterBeg.getTime()) && (this.endDate.getTime() == this.nextQuarterEnd.getTime())) {
      el.selectedIndex = 11;
    }
    //This Year:
    else if ((this.startDate.getTime() == this.begYear.getTime()) && (this.endDate.getTime() == this.endYear.getTime())) {
      el.selectedIndex = 12;
    }
    //Last Year:
    else if ((this.startDate.getTime() == this.begLastYear.getTime()) && (this.endDate.getTime() == this.endLastYear.getTime())) {
      el.selectedIndex = 13;
    }
    //Next Year:
    else if ((this.startDate.getTime() == this.begNextYear.getTime()) && (this.endDate.getTime() == this.endNextYear.getTime())) {
      el.selectedIndex = 14;
    }
    //Custom Date Range:
    else {
      el.selectedIndex = 15;
    }
  }

  currentQuarter() {
    let thisMonth = this.today.getMonth();
    let thisYear = this.today.getFullYear();
    //Presets
    this.begQuarter.setHours(0);
    this.endQuarter.setHours(0);
    this.lastQuarterBeg.setHours(0);
    this.lastQuarterEnd.setHours(0);
    this.nextQuarterBeg.setHours(0);
    this.nextQuarterEnd.setHours(0);
    this.begQuarter.setMinutes(0);
    this.endQuarter.setMinutes(0);
    this.lastQuarterBeg.setMinutes(0);
    this.lastQuarterEnd.setMinutes(0);
    this.nextQuarterBeg.setMinutes(0);
    this.nextQuarterEnd.setMinutes(0);
    this.begQuarter.setSeconds(0);
    this.endQuarter.setSeconds(0);
    this.lastQuarterBeg.setSeconds(0);
    this.lastQuarterEnd.setSeconds(0);
    this.nextQuarterBeg.setSeconds(0);
    this.nextQuarterEnd.setSeconds(0);
    this.begQuarter.setMilliseconds(0);
    this.endQuarter.setMilliseconds(0);
    this.lastQuarterBeg.setMilliseconds(0);
    this.lastQuarterEnd.setMilliseconds(0);
    this.nextQuarterBeg.setMilliseconds(0);
    this.nextQuarterEnd.setMilliseconds(0);
    if (thisMonth < 3 && thisMonth > 0 || thisMonth == 0){
      this.begQuarter.setDate(1);
      this.begQuarter.setMonth(0);
      this.endQuarter.setDate(1);
      this.endQuarter.setMonth(3);
      this.endQuarter.setDate(this.endQuarter.getDate()-1);
      this.lastQuarterBeg.setDate(1);
      this.lastQuarterBeg.setMonth(9);
      this.lastQuarterBeg.setFullYear(thisYear-1);
      this.lastQuarterEnd.setTime(this.begQuarter.getTime()-86400000);
      this.nextQuarterBeg.setTime(this.endQuarter.getTime()+86400000);
      this.nextQuarterEnd.setDate(1);
      this.nextQuarterEnd.setMonth(6);
      this.nextQuarterEnd.setTime(this.nextQuarterEnd.getTime()-86400000);
    }
    else if (thisMonth < 6 && thisMonth > 2){
      this.begQuarter.setDate(1);
      this.begQuarter.setMonth(3);
      this.endQuarter.setDate(1);
      this.endQuarter.setMonth(6);
      this.endQuarter.setDate(this.endQuarter.getDate()-1);
      this.lastQuarterBeg.setDate(1);
      this.lastQuarterBeg.setMonth(0);
      this.lastQuarterEnd.setTime(this.begQuarter.getTime()-86400000);
      this.nextQuarterBeg.setTime(this.endQuarter.getTime()+86400000);
      this.nextQuarterEnd.setDate(1);
      this.nextQuarterEnd.setMonth(9);
      this.nextQuarterEnd.setTime(this.nextQuarterEnd.getTime()-86400000);
    }
    else if (thisMonth < 9 && thisMonth > 5){
      this.begQuarter.setDate(1);
      this.begQuarter.setMonth(6);
      this.endQuarter.setDate(1);
      this.endQuarter.setMonth(9);
      this.endQuarter.setDate(this.endQuarter.getDate()-1);
      this.lastQuarterBeg.setDate(1);
      this.lastQuarterBeg.setMonth(3);
      this.lastQuarterEnd.setTime(this.begQuarter.getTime()-86400000);
      this.nextQuarterBeg.setTime(this.endQuarter.getTime()+86400000);
      this.nextQuarterEnd.setDate(1);
      this.nextQuarterEnd.setMonth(0);
      this.nextQuarterEnd.setFullYear(thisYear+1);
      this.nextQuarterEnd.setTime(this.nextQuarterEnd.getTime()-86400000);
    }
    else if (thisMonth < 12 && thisMonth > 8){
      this.begQuarter.setDate(1);
      this.begQuarter.setMonth(9);
      this.endQuarter.setDate(1);
      this.endQuarter.setMonth(0);
      this.endQuarter.setFullYear(thisYear+1);
      this.endQuarter.setDate(this.endQuarter.getDate()-1);
      this.lastQuarterBeg.setDate(1);
      this.lastQuarterBeg.setMonth(6);
      this.lastQuarterEnd.setTime(this.begQuarter.getTime()-86400000);
      this.nextQuarterBeg.setTime(this.endQuarter.getTime()+86400000);
      this.nextQuarterEnd.setDate(1);
      this.nextQuarterEnd.setMonth(3);
      this.nextQuarterEnd.setFullYear(thisYear+1)
      this.nextQuarterEnd.setTime(this.nextQuarterEnd.getTime()-86400000);
    }
  }


}
