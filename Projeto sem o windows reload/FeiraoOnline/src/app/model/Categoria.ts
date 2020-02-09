import { Produto } from './Produto';

export class Categoria{
    public idCategoria: number;
    public categoria:string;
    produto:Array<Produto> = new Array();
}