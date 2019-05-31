/* tslint:disable */
// Exact copy of contact/highlight.directive except for color and message
import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[highlight]' })
/** Highlight the attached element or an InputElement in red */
export class HighlightDirective {
	constructor(el: ElementRef) {
		el.nativeElement.style.backgroundColor = 'red';
		// console.log(
		//   `* Shared highlight called for ${el.nativeElement.tagName}`);
	}
}
