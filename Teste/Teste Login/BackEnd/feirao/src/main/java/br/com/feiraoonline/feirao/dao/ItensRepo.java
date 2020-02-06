package br.com.feiraoonline.feirao.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.com.feiraoonline.feirao.model.Itens;
import br.com.feiraoonline.feirao.model.Produto;

public interface ItensRepo extends CrudRepository<Itens, Integer> {
	

}
