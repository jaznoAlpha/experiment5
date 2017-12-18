import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TesterPage } from './tester';

import { DirectivesModule } from '../../directives/directives.module'
import { ReceivingComponentModule } from '../../components/recieving-component/receiving-component.module'

@NgModule({
  declarations: [
    TesterPage,
  ],
  imports: [
    IonicPageModule.forChild(TesterPage),
    DirectivesModule,
    ReceivingComponentModule
  ],
})
export class TesterPageModule {}
