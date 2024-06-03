import {Component, OnInit} from '@angular/core';
import {Oferta} from "../../model/Oferta";
import {OfertasService} from "../../services/ofertas.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  public ofertas!: Oferta[]

  constructor(
    private ofertasService: OfertasService,
    private route: Router
  ) { }

  ngOnInit() {
    this.ofertasService.getOfertas()
      .then(ofertas => {
        this.ofertas = ofertas;
      }).catch(error => {
      console.error('Erro ao buscar ofertas:', error);
    });
  }


  navigateToOferta(id: number) {
    this.route.navigate(['oferta',id])
  }

}
