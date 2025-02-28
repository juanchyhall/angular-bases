import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

public heroNames:string[] = ['Spiderman','Hulk','Black Panter','Thor']
public deleteHero?:string;

removeLastHero():void{
  this.deleteHero = this.heroNames.pop()
}
}
