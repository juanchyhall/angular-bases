import { EventEmitter, Injectable, Output } from '@angular/core';
import { Character } from '../interfaces/character';
import {v4 as uuid} from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class DbzService {


  public characters:Character[] = [
    {
      id: uuid(),
      name:'Krilin',
      power:5000
    },
    {
      id: uuid(),
      name:'Goku',
      power:10000
    },
    {
      id: uuid(),
      name:'Vegeta',
      power: 12000
    }]



    @Output()
    public deletedCharacter:EventEmitter<string> = new EventEmitter();

    addCharacter(character:Character):void{
      const newCharacter:Character ={...character,id:uuid()}
      this.characters.push(newCharacter)
    }

    deleteCharacterById(id:string){
      this.characters = this.characters.filter(character => character.id !== id)
    }



}
