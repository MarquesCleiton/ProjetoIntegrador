package br.com.feiraoonline.feirao.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.feiraoonline.feirao.dao.ClienteRepo;
import br.com.feiraoonline.feirao.model.Cliente;

@Component
public class ClienteService implements IClienteService {

	@Autowired
	private ClienteRepo repo;
	
	@Override
	public List<Cliente> recuperaTodosCliente(){
		return (List<Cliente>) repo.findAll();
	}
	
	@Override
	public Cliente recuperarPorId(int id) {				
		return repo.findById(id).get();
	}
	
	@Override
	public void novoCliente(Cliente cliente) {
		repo.save(cliente);
	}

	@Override
	public void atualizaCliente(Cliente cliente) {
		repo.save(cliente);
	}
	
	
}
