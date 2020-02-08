import { Pedido } from './Pedido';
import { Produto } from './Produto';

export class Itens{
    idItens:number;
    pedido:Pedido;
    produto:Produto = new Produto();
}