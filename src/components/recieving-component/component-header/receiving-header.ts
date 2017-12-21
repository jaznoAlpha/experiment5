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

  today = new Date()
  tomorrow = new Date()

  constructor(private dateservice: ReceivingDateService,
              private events: Events) {
    events.subscribe('endDate', (date) => {
      console.log('ed: ' + date)
    });
    events.subscribe('startDate', (date) => {
      console.log('sd: ' + date);
    });
    this.tomorrow.setDate(this.today.getDate()+1);
  }

  onChange(val) {
    this.events.publish('dropdown', val);
    console.log(this.tomorrow)
  }

  checkDates() { }

  setDates() { }

}
