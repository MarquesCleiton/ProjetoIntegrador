package br.com.feiraoonline.feirao.services;

import java.util.List;

import br.com.feiraoonline.feirao.model.Entrega;



public interface IEntregaService {
	public List<Entrega> recuperaTodasEntrega();			//READ
	public Entrega recuperarPorId(int id);			//READ
	public void novaEntrega(Entrega entrega);		// CREATE
	public void atualizaEntrega(Entrega entrega);	//UPDATE


}
