import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDestacar]',
  standalone: true
})
export class DiretivaDestacar {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'rgba(255, 255, 0, 0.5)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
