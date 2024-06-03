import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {Oferta} from "../model/Oferta";

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  private apiUrl = 'http://localhost:3000/ofertas?destaque=1';

  constructor(private http: HttpClient) { }

  public getOfertas(): Promise<Oferta[]> {
    return firstValueFrom(this.http.get<Oferta[]>(this.apiUrl))
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
    return firstValueFrom(this.http.get<Oferta[]>(`http://localhost:3000/ofertas?categoria=${categoria}`))
      .then(response => {
        return response;
      })
      .catch(error => {
        console.error('Erro ao buscar ofertas:', error);
        throw error; // Re-lança o erro para ser tratado no componente
      });
  }

  public getOfertaPorId(id: number) {
    return firstValueFrom(this.http.get<any>(`http://localhost:3000/ofertas?id=${id}`))
      .then(response => {
        return response[0];
      })
      .catch(error => {
        console.error('Erro ao buscar ofertas:', error);
        throw error; // Re-lança o erro para ser tratado no componente
      });
  }
}
