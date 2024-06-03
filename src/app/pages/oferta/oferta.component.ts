import { Component } from '@angular/core';
import {Oferta} from "../../model/Oferta";
import {ActivatedRoute} from "@angular/router";
import {OfertasService} from "../../services/ofertas.service";
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-oferta',
  standalone: true,
  imports: [],
  templateUrl: './oferta.component.html',
  styleUrl: './oferta.component.css'
})
export class OfertaComponent {
  private id!: number;
  oferta!: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    // this.route.params.subscribe((parametro : any) => {
    //   console.log(parametro.id)
    // })

    this.ofertasService.getOfertaPorId(this.id)
      .then((data: Oferta) => {
        // console.log(data)
        // console.log(this.id)
        this.oferta = data;
      })

    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro)
    // })

    //
    // let ObservableTeste = new Observable(subscriber =>
    //   {
    //     subscriber.next("teste");
    //     subscriber.complete();
    //     subscriber.next("segundo evento")
    //     subscriber.error("deu ruim")
    //
    //   }
    // )
    //
    //
    // ObservableTeste.subscribe(value => {
    //   console.log(value);
    // })

  }

}
