import { Component, OnInit } from '@angular/core';
import { Front } from 'src/app/Shared/Models/front.model';

@Component({
  selector: 'app-front-list',
  templateUrl: './front-list.component.html',
  styleUrls: ['./front-list.component.css']
})
export class FrontListComponent implements OnInit {

  fronts : Front[] = [ new Front('Frente 1','Tacuarembo','Descripcion')];

  constructor() { }

  ngOnInit(): void {
  }

  onFrontAdded(newFront: Front){
    this.fronts.push(newFront);
  }

}
