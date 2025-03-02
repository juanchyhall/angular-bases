import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character';


@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character:Character = { name:"", power: 0 }
  public lastCreated:string = ""

  public addCharacter():void{
    if(this.character.name==="")throw new Error('Debe ingresar el nombre del personaje');
    if(this.character.power===0 || this.character.power === null)throw new Error('Debe ingresar el poder');

    this.onNewCharacter.emit(this.character)
    this.lastCreated = this.character.name
    this.character = {name:"",power:0}
  }
}
