import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



//routes
import { FeatureRoutingModule } from './app.routes';

//services
import { HeroesService } from "./services/heroes.services";

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/shared/search/search.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    SearchComponent,
    TarjetaComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
