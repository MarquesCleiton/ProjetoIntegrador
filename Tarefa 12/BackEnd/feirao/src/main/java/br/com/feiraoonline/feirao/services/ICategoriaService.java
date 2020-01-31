package br.com.feiraoonline.feirao.services;

import java.util.List;

import br.com.feiraoonline.feirao.model.Categoria;

public interface ICategoriaService {

	public List<Categoria> recuperaTodos();				//READ
	public Categoria recuperarPorId(int id);			//READ
	public void novoCategoria(Categoria categoria);		// CREATE
	public void atualizaCategoria(Categoria categoria);	//UPDATE
}
