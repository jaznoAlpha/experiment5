import { Component } from '@angular/core';

//Service
import { ReceivingDateService } from '../service/receiving-date.service';


@Component({
  selector: 'receiving-core',
  templateUrl: 'receiving-core.html',
  providers: [ReceivingDateService]
})
export class ReceivingCoreComponent {

  constructor(private dateservice: ReceivingDateService) {
  }

}
