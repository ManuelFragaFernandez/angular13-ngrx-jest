import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[lyricsOnly]',
})
export class LyricsOnlyDirective {
  constructor(private elRef: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    const lyricsOnly = /[^a-zA-Z(" ")]*/g;
    const initValue = this.elRef.nativeElement.value;

    this.elRef.nativeElement.value = initValue.replace(lyricsOnly, '');

    if (initValue !== this.elRef.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
