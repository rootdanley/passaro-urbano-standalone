import { Component } from '@angular/core';
import {Oferta} from "../../model/Oferta";
import {OfertasService} from "../../services/ofertas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-restaurantes',
  standalone: true,
  imports: [],
  templateUrl: './restaurantes.component.html',
  styleUrl: './restaurantes.component.css'
})
export class RestaurantesComponent {
  public ofertas!: Oferta[];

  constructor(
    private ofertasService: OfertasService,
    private route: Router
  ) { }


  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('restaurante')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas;
      })
  }

  navigateToOferta(id: number) {
    this.route.navigate(['oferta',id])
  }
}
