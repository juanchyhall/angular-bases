import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<hr>
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaseCounter(1)">+1</button>
  <button (click)="resetCounter(10)">Reset</button>
  <button (click)="decreaseCounter(1)">-1</button>`,
})
export class CounterComponent {

   public counter:number = 10;

   increaseCounter(value:number){
    this.counter += value;
  }

  decreaseCounter(value:number){
    this.counter -=value;
  }

  resetCounter(value:number){
    this.counter = value
  }

}
