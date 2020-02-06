package br.com.feiraoonline.feirao.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.feiraoonline.feirao.dao.CategoriaRepo;
import br.com.feiraoonline.feirao.model.Categoria;

@Component
public class CategoriaService implements ICategoriaService {

	@Autowired
	private CategoriaRepo repo;

	@Override
	public List<Categoria> recuperaTodos() { // aqui recupera todas as categorias
		return (List<Categoria>) repo.findAll();
	}

	@Override
	public Categoria recuperarPorId(int id) { // aqui recupera as categorias pelo ID da mesma
		try {
			return repo.findById(id).get();
		} catch (Exception ex) {
			return null;
		}
	}

	@Override 
	public Categoria buscarPorCategoria(int id){
		return repo.findAllByidCategoria(id);
	}
	@Override
	public void novaCategoria(Categoria categoria) { // aqui adiciona uma nova (caso a gnt adicione) categoria
		repo.save(categoria);
	}

	@Override
	public void atualizaCategoria(Categoria categoria) { // aqui atualiza uma categoria (caso a gnt altere) que foi
															// adicionada
		repo.save(categoria);
	}
}