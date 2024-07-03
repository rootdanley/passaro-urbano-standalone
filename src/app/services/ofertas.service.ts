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
    return firstValueFrom(this.http.get<Oferta[]>(`${URL_API}/ofertas?destaque=1`))
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
    return firstValueFrom(this.http.get<Oferta[]>(`${URL_API}/ofertas?categoria=${categoria}`))
      .then(response => {
        return response;
      })
      .catch(error => {
        console.error('Erro ao buscar ofertas:', error);
        throw error; // Re-lança o erro para ser tratado no componente
      });
  }

  public getOfertaPorId(id: number) {
    return firstValueFrom(this.http.get<any>(`${URL_API}/ofertas?id=${id}`))
      .then(response => {
        return response[0];
      })
      .catch(error => {
        console.error('Erro ao buscar ofertas:', error);
        throw error; // Re-lança o erro para ser tratado no componente
      });
  }

  public getComoUsarOfertaPorId(id: number):Promise<any> {
    return firstValueFrom(this.http.get<string>(`${URL_API}/como-usar?id=${id}`))
      .then((res : any) => {
        return res[0].descricao;
      })
      .catch(err => {
        console.error('Erro ao buscar ofertas:', err);
        throw err;
      })
  }

  public getOndeFicaOfertaPorId(id: number): Promise<any> {
    return firstValueFrom(this.http.get<any>(`${URL_API}/onde-fica?id=${id}`))
      .then((res: any) =>  {
        return res[0].descricao;
      })
      .catch(err => {
        console.error('Erro ao buscar ofertas:', err);
        throw err;
      })
  }
}
