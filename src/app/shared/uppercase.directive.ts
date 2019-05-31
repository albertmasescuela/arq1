import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
@Directive({
	selector: '[uppercase]'
})
export class UppercaseDirective {
	value: any;

	@HostListener('input', ['$event']) onInputChange($event) {
		$event.target.value = $event.target.value.toUpperCase();
	}
}
