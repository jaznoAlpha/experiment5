//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Core Components
import { ReceivingCoreComponent } from './component-core/receiving-core';
import { ReceivingHeaderComponent } from './component-header/receiving-header';

//Calendar Components
import { CalendarCoreStartComponent } from './component-calendar/calendar-start/calendar-core-start';
import { CalendarStartComponent }  from './component-calendar/calendar-start/calendar/calendar-start';
import { MonthAndYearStartComponent } from './component-calendar/calendar-start/month-and-year/start-month-and-year';
import { CalendarButtonStartComponent } from './component-calendar/calendar-start/calendar-button/calendar-button-start';

import { CalendarCoreEndComponent } from './component-calendar/calendar-end/calendar-core-end';
import { CalendarEndComponent }  from './component-calendar/calendar-end/calendar/calendar-end';
import { MonthAndYearEndComponent } from './component-calendar/calendar-end/month-and-year/end-month-and-year';
import { CalendarButtonEndComponent } from './component-calendar/calendar-end/calendar-button/calendar-button-end';

//Service
import { ReceivingDateService } from './service/receiving-date.service'

@NgModule({
    declarations: [ ReceivingCoreComponent,
                    ReceivingHeaderComponent,
                    CalendarCoreStartComponent,
                    CalendarStartComponent,
                    MonthAndYearStartComponent,
                    CalendarButtonStartComponent,
                    CalendarCoreEndComponent,
                    CalendarEndComponent,
                    MonthAndYearEndComponent,
                    CalendarButtonEndComponent],

    imports:      [ CommonModule,
                    ReactiveFormsModule ],

    providers:    [ ReceivingDateService ],

    exports:      [ ReceivingCoreComponent,
                    ReceivingHeaderComponent,
                    CalendarCoreStartComponent,
                    CalendarStartComponent,
                    MonthAndYearStartComponent,
                    CalendarButtonStartComponent,
                    CalendarCoreEndComponent,
                    CalendarEndComponent,
                    MonthAndYearEndComponent,
                    CalendarButtonEndComponent]
})

export class ReceivingComponentModule {}
