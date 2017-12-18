import { Component, ElementRef, HostListener } from '@angular/core';

//Ionic
import { Events } from 'ionic-angular';

//Service
import { ReceivingDateService } from '../../service/receiving-date.service';


@Component({
  selector: 'calendar-core-end',
  templateUrl: 'calendar-core-end.html',
  providers: [ReceivingDateService]
})
export class CalendarCoreEndComponent {
  @HostListener('document:mousedown', ['$event'])
  onClick(e) {
    const clickedInsideEnd = this.elRef.nativeElement.contains(event.target);
    if (!clickedInsideEnd) {
      this.calendarEndActive = false;
    }
  }
  calendarEndActive: boolean = false;

  constructor(private dateservice: ReceivingDateService,
              private elRef: ElementRef,
              public events: Events) {
                events.subscribe('endDate', (date) => {
                  this.calendarEndActive = false;
                });
  }

  switchEndCalendarActive() {
    this.calendarEndActive = !this.calendarEndActive
  }

}
