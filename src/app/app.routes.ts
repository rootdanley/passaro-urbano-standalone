import { Routes } from '@angular/router';
import {OfertaComponent} from "./pages/oferta/oferta.component";
import {DiversaoComponent} from "./pages/diversao/diversao.component";
import {RestaurantesComponent} from "./pages/restaurantes/restaurantes.component";
import {HomeComponent} from "./pages/home/home.component";
import {ComoUsarComponent} from "./components/oferta-components/como-usar/como-usar.component";
import {OndeFicaComponent} from "./components/oferta-components/onde-fica/onde-fica.component";

export const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'diversao', component: DiversaoComponent },
  { path: 'oferta/:id', component:OfertaComponent,
    children:[
      { path: '',  component:  ComoUsarComponent },
      { path:  'como-usar', component: ComoUsarComponent },
      { path: 'onde-fica', component:  OndeFicaComponent }
    ]
  }
];
