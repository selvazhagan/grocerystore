import { ErrorsDisplayDirective } from './errors.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('ErrorsDirective', () => {
  it('should create an instance', () => {
    const nativeElement = '<p>'
    const elementRef = new ElementRef(nativeElement);
    //const renderer = new Renderer2();
    //const directive = new ErrorsDisplayDirective(elementRef);
    //expect(directive).toBeTruthy();
  });
});
