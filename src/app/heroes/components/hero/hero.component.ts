import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent{

      public name:string = 'Sin Nombre';
      public age:number = 1;
      
      get capitalizeName():string{
        return this.name.toLocaleUpperCase();
      }

      getHeroDescription():string{
        return `${this.name} - ${this.age}`
      }

      changeHero(value:string):void{
        this.name = value
      }

      changeAge(value:string):void{
        this.age = parseInt(value)
      }

      resetForm():void{
        this.name = 'Sin Heroe'
        this.age = 0;
      }


  }
