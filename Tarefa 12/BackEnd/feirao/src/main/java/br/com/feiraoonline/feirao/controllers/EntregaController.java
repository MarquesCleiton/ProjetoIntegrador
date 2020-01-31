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

import br.com.feiraoonline.feirao.model.Entrega;
import br.com.feiraoonline.feirao.services.IEntregaService;

@RestController
@CrossOrigin("*")
public class EntregaController {
	
	@Autowired
	private IEntregaService servico;
	
	@GetMapping("/entrega/todos")
	public ResponseEntity<List<Entrega>> mostrarTodos() {
		return ResponseEntity.ok(servico.recuperaTodasEntrega());
	}
	
	@GetMapping("/entrega/{id}")
	public ResponseEntity<Entrega> mostrarPeloId(@PathVariable int id) {
		Entrega c = servico.recuperarPorId(id);
		if(c != null) {
			return ResponseEntity.ok(c);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping("/entrega/cadastrar")
	public ResponseEntity<Entrega> cadastrarNova(@RequestBody Entrega entrega) {
		servico.novaEntrega(entrega);
		return ResponseEntity.ok(entrega);
	}
	
	@PutMapping("/entrega/atualizar")
	public ResponseEntity<Entrega> atualizarProduto(@RequestBody Entrega entrega) {
		servico.atualizaEntrega(entrega);
		return ResponseEntity.ok(entrega);
	}
	

}
