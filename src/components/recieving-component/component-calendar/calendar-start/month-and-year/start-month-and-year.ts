import { Component } from '@angular/core';

//Service
import { CalendarStartComponent } from '../calendar/calendar-start';

@Component({
  selector: 'start-month-and-year',
  templateUrl: 'start-month-and-year.html'
})
export class MonthAndYearStartComponent {

  constructor(private calendarComponent: CalendarStartComponent) {
  }

  onCompletionClick() {
    this.calendarComponent.onMonthYear();
  }

  onMonthClick(monthNum: number) {
    this.calendarComponent.monthYearMonthHandle(monthNum);
  }

}
