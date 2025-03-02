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

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  @Output()
  public showDeleted:EventEmitter<string> = new EventEmitter()

  ondeleteCharacter(id?:string):void{
    if(!id)return;
    this.onDelete.emit(id)
  }
}
