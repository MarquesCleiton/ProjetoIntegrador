import { Cliente } from './Cliente';
import { Itens } from './Itens';

export class Pedido{
    idPedido: number;
    dtPedido: string;
    quantidade: number;
    cliente_idcliente: Cliente = new Cliente();
}