package br.com.feiraoonline.feirao.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.com.feiraoonline.feirao.model.Produto;

public interface ProdutoRepo extends CrudRepository<Produto, Integer> {
	
	}
