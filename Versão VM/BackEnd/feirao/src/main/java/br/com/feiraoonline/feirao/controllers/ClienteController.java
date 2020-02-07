package br.com.feiraoonline.feirao.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.feiraoonline.feirao.model.Cliente;
import br.com.feiraoonline.feirao.security.Autenticador;
import br.com.feiraoonline.feirao.security.Token;
import br.com.feiraoonline.feirao.services.IClienteService;

@RestController
@CrossOrigin("*")
public class ClienteController {

	
	@Autowired
	private IClienteService service;

	// Create, metodo que vai ser invocado para criar/cadastrar um novo objeto
	@PostMapping("/cliente/cadastrar")
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
			return ResponseEntity.status(404).build();
	}

	// Read - esse lista todos os usuarios
	
	@GetMapping("/cliente/todos")
	public ResponseEntity<List<Cliente>> mostrarTodos() {
		
		return ResponseEntity.ok(service.recuperaTodosCliente());
	}
	
	// Update - esse atualiza os dados do cliente
	@PutMapping ("/cliente/atualizar")
	public ResponseEntity<Cliente> atualizaCliente(@RequestBody Cliente cliente) {
		service.atualizaCliente(cliente);
		return ResponseEntity.ok(cliente);
	}
	
	@PostMapping("/login")
	public ResponseEntity<Token> autentica(@RequestBody Cliente cliente) {
		
		List<Cliente> clientes = service.recuperaTodosCliente();
		boolean exite = false;
		
		for(Cliente c : clientes) {
			if(cliente.getEmail().equals(c.getEmail()) && c.getSenha().equals(cliente.getSenha())) {
				cliente = c;
				exite = true;
			}
		}
		
		if(exite) {
			String tk = Autenticador.generateToken(cliente);
			Token token = new Token();
			token.setStrToken(tk);
			return ResponseEntity.ok(token);
		}
		return ResponseEntity.status(403).build();
	}
	
	@GetMapping("/infoCliente")
	public ResponseEntity<Cliente> getInfo(@RequestParam String token){
		if (token != null) {
			if (Autenticador.isValid(token)) {
				return ResponseEntity.ok(Autenticador.getUser(token));
			}
			return ResponseEntity.status(403).build();
		}
		return ResponseEntity.badRequest().build();
	}
}
