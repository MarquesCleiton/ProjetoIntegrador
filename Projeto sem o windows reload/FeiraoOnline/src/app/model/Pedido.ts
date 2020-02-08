import { Cliente } from './Cliente';
import { Itens } from './Itens';

export class Pedido{
    idpedido: number;    
    quantidade: number;
    dtpedido: string;
    cliente: Cliente = new Cliente();
    itens:Array<Itens> = new Array();
}