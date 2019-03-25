import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../../services/heroes.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  heroesEncontrados:Heroe[] = [];
  termino:string ="";
  constructor( private _heroesService:HeroesService, private _activatedRoute:ActivatedRoute) { }
  ngOnInit() {
    this._activatedRoute.params.subscribe(params=>{
      this.termino = params.termino.toLowerCase();
      this.heroesEncontrados=this._heroesService.BuscarHeroe(this.termino);
      // console.log(this.heroesEncontrados);
      // console.log(this.heroesEncontrados.length);
    })
  }//ngOnInit()

}
