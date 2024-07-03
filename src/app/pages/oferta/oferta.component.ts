import { Component } from '@angular/core';
import {Oferta} from "../../model/Oferta";
import {ActivatedRoute, RouterLink, RouterOutlet} from "@angular/router";
import {OfertasService} from "../../services/ofertas.service";

@Component({
  selector: 'app-oferta',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './oferta.component.html',
  styleUrl: './oferta.component.css'
})
export class OfertaComponent {
  private id!: number;
  oferta!: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.ofertasService.getOfertaPorId(this.id)
      .then((data: Oferta) => {
        this.oferta = data;
      })

  }

}
