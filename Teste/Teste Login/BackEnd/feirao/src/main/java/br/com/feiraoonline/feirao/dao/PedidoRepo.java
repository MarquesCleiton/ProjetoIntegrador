package br.com.feiraoonline.feirao.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.com.feiraoonline.feirao.model.Pedido;

public interface PedidoRepo extends CrudRepository <Pedido, Integer> {
   public Pedido findByCliente(int cliente);
   

}
