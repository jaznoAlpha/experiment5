import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

//Ionic
import { Events } from 'ionic-angular';

import { ReceivingDateService } from '../../../service/receiving-date.service';

@Component({
    selector: 'calendar-button-start',
    templateUrl: 'calendar-button-start.html',
    providers: [ReceivingDateService]
})

export class CalendarButtonStartComponent implements OnInit {
    @HostListener('mouseenter', ['$event'])
    onEnter(e){
      this.month = '^';
    }
    @HostListener('mouseleave', ['$event'])
    onLeave(e){
        if(!this.applied){
        this.setMonth(this.startMonth);}
    }
    @HostListener('document:mousedown', ['$event'])
    onClick(e) {
      const clickedInsideStart = this.elref.nativeElement.contains(event.target);
      if (!clickedInsideStart) {
        this.applied = false;
        this.setMonth(this.startMonth);
      }
      else {
        this.applied = !this.applied;
      }
    }

    startDate = new Date().getDate();
    startMonth = new Date().getMonth();
    startYear = new Date().getFullYear();

    applied = false;
    month;
    day = this.startDate;


    constructor(private dateservice: ReceivingDateService,
                private elref: ElementRef, public events: Events) {
                    events.subscribe('startDate', (date) => {
                        this.setStardDate(date);
                      });
                      events.subscribe('endDate', (date) => {
                        this.checkDate(date)
                      });
                }

    ngOnInit(){
        this.setMonth(this.startMonth);
    }

    checkDate(date) {
        let startDate = date.getDate();
        let startMonth = date.getMonth();
        let startYear = date.getFullYear();
        if(startYear > this.endYear){
            this.setStardDate(date);
        }
        else if(startMonth > this.endMonth){
            this.setStardDate(date);
        }
        else if(startDate > this.endDate){
            this.setStardDate(date);
        }
    }

    setStardDate(date) {
        this.day = date.getDate();
        this.setMonth(date.getMonth());
        this.startDate = date.getDate();
        this.startMonth = date.getMonth();
        this.startYear = date.getFullYear();
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