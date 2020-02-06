package br.com.feiraoonline.feirao.services;

import java.util.List;

import br.com.feiraoonline.feirao.model.Categoria;
import br.com.feiraoonline.feirao.model.Produto;

public interface ICategoriaService {

	public List<Categoria> recuperaTodos();				//READ
	public Categoria recuperarPorId(int id);			//READ
	public void novaCategoria(Categoria categoria);		// CREATE
	public void atualizaCategoria(Categoria categoria);	//UPDATE
	public Categoria buscarPorCategoria(int id);
}
