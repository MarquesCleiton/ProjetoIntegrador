package br.com.feiraoonline.feirao.services;

import java.util.List;


import br.com.feiraoonline.feirao.model.Itens;

public interface IItensService {
	public List<Itens> recuperaTodosItens();			//READ
	public Itens recuperarPorId(int id);			//READ
	public void novoIten(Itens itens);		// CREATE
	public void atualizaItens(Itens itens);	//UPDATE

}
