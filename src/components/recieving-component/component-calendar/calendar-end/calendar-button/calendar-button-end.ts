import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

//Ionic
import { Events } from 'ionic-angular';

import { ReceivingDateService } from '../../../service/receiving-date.service';

@Component({
    selector: 'calendar-button-end',
    templateUrl: 'calendar-button-end.html',
    providers: [ReceivingDateService]
})

export class CalendarButtonEndComponent implements OnInit {
    @HostListener('mouseenter', ['$event'])
    onEnter(e){
      this.month = '^';
    }
    @HostListener('mouseleave', ['$event'])
    onLeave(e){
        if(!this.applied){
        this.setMonth(this.endMonth);}
    }
    @HostListener('document:mousedown', ['$event'])
    onClick(e) {
      const clickedInsideEnd = this.elref.nativeElement.contains(event.target);
      if (!clickedInsideEnd) {
        // this.setMonth(this.endMonth); ////Look at this!
        if (this.applied) {this.setMonth(this.endMonth)}
        this.applied = false;
      }
      else {
        this.applied = !this.applied;
      }
    }

    endDate = new Date().getDate();
    endMonth = new Date().getMonth();
    endYear = new Date().getFullYear();

    applied = false;
    month;
    day = this.endDate;

    constructor(private dateservice: ReceivingDateService,
                private elref: ElementRef, public events: Events) {
                    events.subscribe('endDate', (date) => {
                        this.setEndDate(date);
                      });
                      events.subscribe('startDate', (date) => {
                        this.checkDate(date)
                      });
                      events.subscribe('dropdown', (val) => {
                        this.dateHelper(val);
                      });
                                  }

    ngOnInit(){
        this.setMonth(this.endMonth);
    }

    dateHelper(val) {
        let date = new Date();
        switch(val) {
            case 'today':
                this.setEndDate(date);
                break;
            case 'tomorrow':
                date.setDate(date.getDate()+1);
                this.setEndDate(date);
                break;
            case 'week':
                date.setDate(date.getDate()+7);
                this.setEndDate(date);
                break;
            case 'month':
                console.log('month')
                break;
            case 'quarter':
                console.log('quarter')
                break;
        }
    }

    checkDate(date) {
        let startDate = date.getDate();
        let startMonth = date.getMonth();
        let startYear = date.getFullYear();
        if(startYear > this.endYear){
            this.setEndDate(date);
        }
        else if(startMonth > this.endMonth && startYear == this.endYear){
            this.setEndDate(date);
        }
        else if(startDate > this.endDate && startMonth == this.endMonth && startYear == this.endYear){
            this.setEndDate(date);
        }
    }

    setEndDate(date) {
        this.day = date.getDate();
        this.setMonth(date.getMonth());
        this.endDate = date.getDate();
        this.endMonth = date.getMonth();
        this.endYear = date.getFullYear();
    }

    setMonth(monthNum) {
        switch(monthNum) {
            case 0: 
                this.month = 'JAN';
                break;
            case 1: 
                this.month = 'FEB';
                break;
            case 2: 
                this.month = 'MAR';
                break;
            case 3: 
                this.month = 'APR';
                break;
            case 4: 
                this.month = 'MAY';
                break;
            case 5: 
                this.month = 'JUN';
                break;
            case 6: 
                this.month = 'JUL';
                break;
            case 7: 
                this.month = 'AUG';
                break;
            case 8: 
                this.month = 'SEP';
                break;
            case 9: 
                this.month = 'OCT';
                break;
            case 10: 
                this.month = 'NOV';
                break;
            case 11: 
                this.month = 'DEC';
        }
    }

}