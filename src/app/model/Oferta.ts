import {Imagem} from "./Imagem";

export interface Oferta {
  id: number,
  categoria: string,
  titulo: string,
  descricao_oferta: string,
  anunciante: string,
  valor: number,
  destaque: boolean,
  imagens: Imagem[]
}
