package br.com.feiraoonline.feirao.services;

import java.util.List;

import br.com.feiraoonline.feirao.model.Produto;

public interface IProdutoService {
	public List<Produto> recuperaTodos();			//READ
	public Produto recuperarPorId(int id);			//READ
	public void novoProduto(Produto produto);		// CREATE
	public void atualizaProduto(Produto produto);	//UPDATE
	public void apagarProduto(int id);	//DELETE
	
}
