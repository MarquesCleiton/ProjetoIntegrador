import { Categoria } from './Categoria';

export class Produto {
    idProduto:number;
    titulo:string;
    detalhes:string;
    linkFoto:string;
    preco:number;
    qtdEstoque:number;
    categoria_id_categoria: number;
}