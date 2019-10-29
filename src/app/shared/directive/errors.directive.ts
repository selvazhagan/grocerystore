import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[apperrorsdisplay]'
})
export class ErrorsDisplayDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() errorColor: string = 'red';

  @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent';

  constructor(private elementRef : ElementRef, private reneder: Renderer2) { 
    console.log(elementRef);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('*********************');
    //this.elementRef.nativeElement.style.backgroundColor ='red';
    //this.reneder.setStyle(this.elementRef.nativeElement,'background-color','red');
    this.backgroundColor = this.defaultColor;
    console.log(this.elementRef.nativeElement.style);
  }

  @HostListener('mouseenter') mouseover(evnt : Event){
    //this.reneder.setStyle(this.elementRef.nativeElement,'background-color','red');
    this.backgroundColor =  this.errorColor;
  }
}
