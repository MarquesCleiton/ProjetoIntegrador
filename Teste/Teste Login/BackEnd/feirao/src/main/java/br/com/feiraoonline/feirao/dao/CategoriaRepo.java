package br.com.feiraoonline.feirao.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.com.feiraoonline.feirao.model.Categoria;
import br.com.feiraoonline.feirao.model.Produto;

public interface CategoriaRepo extends CrudRepository<Categoria, Integer> {
	public Categoria findAllByidCategoria(int id);

}
