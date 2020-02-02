package br.com.feiraoonline.feirao.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.feiraoonline.feirao.dao.EntregaRepo;
import br.com.feiraoonline.feirao.model.Entrega;

@Component
public class EntregaService implements IEntregaService {

	@Autowired
	private EntregaRepo repo;

	@Override
	public List<Entrega> recuperaTodasEntrega() {
		return (List<Entrega>) repo.findAll();
	}

	@Override
	public Entrega recuperarPorId(int id) {
		try {
			return repo.findById(id).get();
		} catch (Exception ex) {
			return null;
		}
	}

	@Override
	public void novaEntrega(Entrega entrega) {
		repo.save(entrega);
	}

	@Override
	public void atualizaEntrega(Entrega entrega) {
		repo.save(entrega);
	}

}
