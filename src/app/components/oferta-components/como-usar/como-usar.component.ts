import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OfertasService} from "../../../services/ofertas.service";

@Component({
  selector: 'app-como-usar',
  standalone: true,
  imports: [],
  templateUrl: './como-usar.component.html',
  styleUrl: './como-usar.component.css'
})
export class ComoUsarComponent implements OnInit{

  comoUsar: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }


  ngOnInit(): void {

    this.ofertasService.getComoUsarOfertaPorId(this.route.parent!.snapshot.params['id'])
      .then((response: any) => {
        this.comoUsar = response;
      })
  }

}
