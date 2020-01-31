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
import org.springframework.web.bind.annotation.RestController;

import br.com.feiraoonline.feirao.model.Itens;
import br.com.feiraoonline.feirao.services.IItensService;

@RestController
@CrossOrigin("*")
public class ItensController {
	
	@Autowired
	private IItensService service;

	// Create, metodo que vai ser invocado para criar/cadastrar um novo objeto
		@PostMapping("/itens/novo")
		public ResponseEntity<Itens> novoCliente(@RequestBody Itens itens) {
			service.novoIten(itens);
			return ResponseEntity.ok(itens);
		}

		// Read - esse busca um Cliente conforme seu id
		@GetMapping("/itens/{id}")
		public ResponseEntity<Itens> buscarClienteId(@PathVariable int id) {
			Itens c = service.recuperarPorId(id);
				if(c != null) {
					return ResponseEntity.ok(c);
				}
				return ResponseEntity.notFound().build();
		}
		
		// Read - esse lista todos os usuarios
		@GetMapping("/itens/todos")
		public  ResponseEntity<List<Itens>> buscarTodos() {
			return ResponseEntity.ok(service.recuperaTodosItens());
		}

		// Update - esse atualiza os dados do cliente
		@PutMapping ("/itens/atualizar")
		public ResponseEntity<Itens> atualizaCliente(@RequestBody Itens itens) {
			service.atualizaItens(itens);
			return ResponseEntity.ok(itens);
		}
}
