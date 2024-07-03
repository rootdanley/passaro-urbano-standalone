import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OfertasService} from "../../../services/ofertas.service";

@Component({
  selector: 'app-onde-fica',
  standalone: true,
  imports: [],
  templateUrl: './onde-fica.component.html',
  styleUrl: './onde-fica.component.css'
})
export class OndeFicaComponent implements OnInit{

  ondeFica: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }



  ngOnInit(): void {
    this.ofertasService.getOndeFicaOfertaPorId(this.route.parent!.snapshot.params['id'])
      .then(response => this.ondeFica = response);
  }

}
