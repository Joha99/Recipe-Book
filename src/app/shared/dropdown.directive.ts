import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
} from "@angular/core";

/* Add functionality that allows us to add certain CSS 
class to the element it sits on once it is clicked.
Once the element the directive sits on is clicked, 
a class is added. Once we click again, the class 
is removed. */
@Directive({
  selector: "[appDropdown]",
})
export class DropdownDirective {
  @HostBinding("class.open") isOpen = false;

  constructor(private el: ElementRef) {}

  @HostListener("click") toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}

/* to close dropdown from clicking anywhere on document: 
import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
 
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
*/
