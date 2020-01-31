package br.com.feiraoonline.feirao.controllers;


import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.feiraoonline.feirao.model.Cliente;
import br.com.feiraoonline.feirao.services.IClienteService;

@RestController
@CrossOrigin("*")
public class ClienteController {

	private IClienteService service;

	// Create, metodo que vai ser invocado para criar/cadastrar um novo objeto
	@PostMapping("/cliente/novo")
	public ResponseEntity<Cliente> novoCliente(@RequestBody Cliente cliente) {
		service.novoCliente(cliente);
		return ResponseEntity.ok(cliente);
	}

	// Read - esse busca um Cliente conforme seu id
	@GetMapping("/cliente/{id}")
	public ResponseEntity<Cliente> buscarClienteId(@PathVariable int id) {
			Cliente c = service.recuperarPorId(id);
			if(c != null) {
				return ResponseEntity.ok(c);
			}
			return ResponseEntity.notFound().build();
	}

	// Read - esse lista todos os usuarios
	@GetMapping("/cliente/todos")
	public  ResponseEntity<List<Cliente>> buscarTodos() {
		return ResponseEntity.ok(service.recuperaTodosCliente());
	}

	// Update - esse atualiza os dados do cliente
	@PutMapping ("/cliente/atualizar")
	public ResponseEntity<Cliente> atualizaCliente(@RequestBody Cliente cliente) {
		service.atualizaCliente(cliente);
		return ResponseEntity.ok(cliente);
	}
}
