import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAddBorderColor]'
})
export class AddBorderColorDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.border="1px solid orangered";
   }

}
