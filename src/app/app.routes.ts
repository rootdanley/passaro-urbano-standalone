import { Routes } from '@angular/router';
import {OfertaComponent} from "./pages/oferta/oferta.component";
import {DiversaoComponent} from "./pages/diversao/diversao.component";
import {RestaurantesComponent} from "./pages/restaurantes/restaurantes.component";
import {HomeComponent} from "./pages/home/home.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurantes', component: RestaurantesComponent},
  {path: 'diversao', component: DiversaoComponent},
  {path: 'oferta/:id', component:OfertaComponent }
];
