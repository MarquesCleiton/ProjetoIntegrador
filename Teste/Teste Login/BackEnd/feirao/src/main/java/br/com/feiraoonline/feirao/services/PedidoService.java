package br.com.feiraoonline.feirao.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.feiraoonline.feirao.dao.ItensRepo;
import br.com.feiraoonline.feirao.dao.PedidoRepo;
import br.com.feiraoonline.feirao.model.Itens;
import br.com.feiraoonline.feirao.model.Pedido;

@Component
public class PedidoService implements IPedidoService {

	@Autowired
	private PedidoRepo repo;

	@Autowired
	private ItensRepo itensrepo;
	
	@Override
	public List<Pedido> recuperaTodosPedidos() {
		return (List<Pedido>) repo.findAll();
	}

	@Override
	public Pedido recuperarPorId(int id) {
		try {
			return repo.findById(id).get();
		} catch (Exception ex) {
			return null;
		}
	}

	@Override
	public void novoPedido(Pedido pedido) {
		repo.save(pedido);
		for (Itens item: pedido.getItens()) {
			item.setPedido(pedido);
			itensrepo.save(item);
		}
		repo.save(pedido);
	}

	@Override
	public void atualizaPedido(Pedido pedido) {
		repo.save(pedido);
	}
	
	@Override 
	public void apagarPedido(int id) {
		repo.deleteById(id);
	}

}
