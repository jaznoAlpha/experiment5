import { Component } from '@angular/core';

//Service
import { ReceivingDateService } from '../service/receiving-date.service';


@Component({
  selector: 'receiving-header',
  templateUrl: 'receiving-header.html',
  providers: [ReceivingDateService]
})
export class ReceivingHeaderComponent {

  constructor(private dateservice: ReceivingDateService) {
  }

}
