import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[jamieInput]'
})
export class InputDirective {
  // colors copied from https://alligator.io/angular/hostbinding-hostlistener/
  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];


  // combination of these two allows input to alwasy be type of text unless overwritten by user
  // to pass in the type, user should use
  // [type]=" 'button' " <-- pay close attention to the single quotes inside
  // the doublequotes denoting a string
  @Input() type: string;
  @HostBinding('attr.type') get getType() {
    return this.type ? this.type : 'text';
  }

  // we can bind any class, property, or attribute
  @HostBinding('style.border-color') borderColor: string;
  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.borderColor = this.possibleColors[colorPick];
  }

  // @HostListener allows us to listen to events
  // top pass in the event,
  @HostListener('click', ['$event'] ) customOnClickEvent($event) {
    console.log('i was clicked, here is the event: ');
    console.log($event);
  }



}
