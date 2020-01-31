package br.com.feiraoonline.feirao.dao;

import org.springframework.data.repository.CrudRepository;

import br.com.feiraoonline.feirao.model.Pedido;

public interface PedidoRepo extends CrudRepository <Pedido, Integer> {

}
