import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({

  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList:Character[] = [];

  @Input()
  public lastDeleted:string = ""

  @Output()
  public onDelete:EventEmitter<number> = new EventEmitter();


  ondeleteCharacter(index:number):void{
    this.onDelete.emit(index)
  }
}
