import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {Oferta} from "../model/Oferta";
import {URL_API} from "../utils/app.api";


@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private http: HttpClient) { }

  public getOfertas(): Promise<Oferta[]> {
    return firstValueFrom(this.http.get<Oferta[]>(`${URL_API}?destaque=1`))
      .then(response => {
        console.log('Dados recebidos:', response);
        return response;
      })
      .catch(error => {
        console.error('Erro ao buscar ofertas:', error);
        throw error; // Re-lança o erro para ser tratado no componente
      });
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return firstValueFrom(this.http.get<Oferta[]>(`${URL_API}?categoria=${categoria}`))
      .then(response => {
        return response;
      })
      .catch(error => {
        console.error('Erro ao buscar ofertas:', error);
        throw error; // Re-lança o erro para ser tratado no componente
      });
  }

  public getOfertaPorId(id: number) {
    return firstValueFrom(this.http.get<any>(`${URL_API}?id=${id}`))
      .then(response => {
        return response[0];
      })
      .catch(error => {
        console.error('Erro ao buscar ofertas:', error);
        throw error; // Re-lança o erro para ser tratado no componente
      });
  }
}
