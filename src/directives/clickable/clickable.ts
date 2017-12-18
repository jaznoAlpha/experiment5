import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';


@Directive({
  selector: '[clickable]' 
})

export class ClickableDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

////WHERE I LEFT OFF
////GO TO THIS URL https://github.com/angular/angular/issues/8277
////AND READ ABOUT INTERFACES/TOKENS by ghetolay commented on Jun 26 •  edited 



  //This will check to see if you've clicked inside the host element and
  //can even provide info on what kind of click it is as well as letting you 
  //know that the user has click outside of the element.
  @HostListener('document:mousedown', ['$event'])
   onClick(e) {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (clickedInside) {
      console.log(e.which)
    }
  }

  //This will follow the x and y coordinates of the mouse cursor
  @HostListener('mousemove', ['$event'])
  onMove(e){
    console.log(e.clientX);
  }

}
