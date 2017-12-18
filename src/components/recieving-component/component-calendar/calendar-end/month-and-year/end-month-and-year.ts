import { Component } from '@angular/core';

//Service
import { CalendarEndComponent } from '../calendar/calendar-end';

@Component({
  selector: 'end-month-and-year',
  templateUrl: 'end-month-and-year.html'
})
export class MonthAndYearEndComponent {

  constructor(private calendarComponent: CalendarEndComponent) {
  }

  onCompletionClick() {
    this.calendarComponent.onMonthYear();
  }

  onMonthClick(monthNum: number) {
    this.calendarComponent.monthYearMonthHandle(monthNum);
  }

}
