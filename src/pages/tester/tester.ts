import { Component, ElementRef, Renderer2 } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TesterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tester',
  templateUrl: 'tester.html',
})
export class TesterPage {

  clicked = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private elRef: ElementRef,
              private renderer: Renderer2) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TesterPage');
  }

  onClick() {
    let pbg = document.getElementsByClassName("pbg");
    let text = document.getElementsByClassName("textonWhite");
    this.clicked = !this.clicked
    if(this.clicked){
    this.clickHelper1(pbg, 'red'); 
    this.clickHelper2(text, 'red'); 
    }
    else {
      this.clickHelper1(pbg, 'green');
      this.clickHelper2(text, 'green'); 
    }
  }

  clickHelper1(coll, color) {
    for(var i=0, len=coll.length; i<len; i++)
    {
        coll[i].style["background-color"] = color;
    }
  }
  clickHelper2(coll, color) {
    for(var i=0, len=coll.length; i<len; i++)
    {
        coll[i].style["color"] = color;
    }
  }

}
