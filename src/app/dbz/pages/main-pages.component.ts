import { Component, EventEmitter, Output, untracked } from '@angular/core';
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  public characters:Character[] = [
    {
      name:'Krilin',
      power:5000
    },
    {
      name:'Goku',
      power:10000
    },
    {
      name:'Vegeta',
      power: 12000
    }]

   public characterDeletedName:string = ''

    @Output()
    public deletedCharacter:string = ""


    public addCharacter(char:Character) {
      this.characters.push(char)
    }

    onNewCharacter(character:Character):void{
      this.characters.push(character)
    }

    onDeleteCharacter(id:number){
      this.characterDeletedName = this.characters[id].name
      this.characters.splice(id,1)
    }
  }
