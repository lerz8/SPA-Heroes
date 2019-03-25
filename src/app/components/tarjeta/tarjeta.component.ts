import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.services';
@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: []
})
export class TarjetaComponent implements OnInit {
@Input() heroe:Heroe;
@Input() index:number;
  constructor( private _router:Router, _heroesService:HeroesService) { }

  ngOnInit() {
  }

  verHeroe(){
    this._router.navigate(['/heroe',this.index]);
  }

}
