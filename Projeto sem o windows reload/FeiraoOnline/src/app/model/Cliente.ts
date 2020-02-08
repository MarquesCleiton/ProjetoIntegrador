import { Pedido } from './Pedido';


export class Cliente{
    public idCliente:number;
    public nome:string;
    public endereco:string;
    public cidade:string;
    public estado:string;
    public cep:string;
    public email:string;
    public senha:string;
    public telefone:string;
    public pedido:Array<Pedido> = new Array();
}