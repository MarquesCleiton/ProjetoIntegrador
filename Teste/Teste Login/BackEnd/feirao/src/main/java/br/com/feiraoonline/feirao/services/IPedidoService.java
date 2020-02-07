package br.com.feiraoonline.feirao.services;

import java.util.List;

import br.com.feiraoonline.feirao.model.Pedido;

public interface IPedidoService {
	
	public List<Pedido> recuperaTodosPedidos();			//READ
	public Pedido recuperarPorId(int id);			//READ
	public void novoPedido(Pedido pedido);		// CREATE
	public void atualizaPedido(Pedido pedido);	//UPDATE
	public void apagarPedido(int id);	//DELETE

}
