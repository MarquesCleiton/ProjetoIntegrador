package br.com.feiraoonline.feirao.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.feiraoonline.feirao.dao.ItensRepo;
import br.com.feiraoonline.feirao.model.Itens;

@Component
public class ItensService implements IItensService {

	@Autowired
	private ItensRepo repo;

	@Override
	public List<Itens> recuperaTodosItens() {
		return (List<Itens>) repo.findAll();
	}

	@Override
	public Itens recuperarPorId(int id) {
		try {
			return repo.findById(id).get();
		} catch (Exception ex) {
			return null;
		}
	}

	@Override
	public void novoIten(Itens itens) {
		repo.save(itens);
	}

	@Override
	public void atualizaItens(Itens itens) {
		repo.save(itens);
	}
}
