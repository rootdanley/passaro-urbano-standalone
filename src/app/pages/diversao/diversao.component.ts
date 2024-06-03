import { Component } from '@angular/core';
import {Oferta} from "../../model/Oferta";
import {OfertasService} from "../../services/ofertas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-diversao',
  standalone: true,
  imports: [],
  templateUrl: './diversao.component.html',
  styleUrl: './diversao.component.css'
})
export class DiversaoComponent {
  ofertasDiversao!: Oferta[];

  constructor(
    private ofertasService: OfertasService,
    private route: Router
  ) {
  }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('diversao')
      .then((ofertasDiversao: Oferta[]) => {
        this.ofertasDiversao = ofertasDiversao;
      })
  }

  navigateToOferta(id: number) {
    this.route.navigate(['oferta',id])
  }
}
