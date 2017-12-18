import { Component, ElementRef, HostListener } from '@angular/core';

//Ionic
import { Events } from 'ionic-angular';

//Service
import { ReceivingDateService } from '../../service/receiving-date.service';


@Component({
  selector: 'calendar-core-start',
  templateUrl: 'calendar-core-start.html',
  providers: [ReceivingDateService]
})
export class CalendarCoreStartComponent {
  @HostListener('document:mousedown', ['$event'])
  onClick(e) {
    const clickedInsideStart = this.elRef.nativeElement.contains(event.target);
    if (!clickedInsideStart) {
      this.calendarStartActive = false;
    }
  }
  calendarStartActive: boolean = false;

  constructor(private dateservice: ReceivingDateService,
    private elRef: ElementRef,
    public events: Events) {
      events.subscribe('startDate', (date) => {
        this.calendarStartActive = false;
      });
}

  switchStartCalendarActive() {
    this.calendarStartActive = !this.calendarStartActive
  }

}
