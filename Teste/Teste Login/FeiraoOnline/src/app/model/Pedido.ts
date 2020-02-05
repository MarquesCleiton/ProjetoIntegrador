import { Cliente } from './Cliente';

export class Pedido{
    idPedido: number;
    dtPedido: string;
    quantidade: number;
    cliente_idcliente: Cliente = new Cliente();
   // entrega_id_entrega: Entrega;
}