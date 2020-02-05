import { Categoria } from './Categoria';

export class Produto {
    idProduto:number;
    titulo:string;
    descricao:string;
    linkFoto:string;
    preco:number;
    qtdEstoque:number;
    categoria: Categoria = new Categoria();
}