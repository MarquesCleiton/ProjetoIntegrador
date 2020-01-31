package br.com.feiraoonline.feirao.services;

import java.util.List;

import br.com.feiraoonline.feirao.model.Cliente;
import br.com.feiraoonline.feirao.model.Produto;

public interface IClienteService {
	
	public List<Cliente> recuperaTodosCliente();			//READ
	public Cliente recuperarPorId(int id);			//READ
	public void novoCliente(Cliente cliente);		// CREATE
	public void atualizaCliente(Cliente cliente);	//UPDATE


}
