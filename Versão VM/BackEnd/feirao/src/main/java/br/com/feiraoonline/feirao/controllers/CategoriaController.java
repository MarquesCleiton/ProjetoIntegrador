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

import br.com.feiraoonline.feirao.model.Categoria;
import br.com.feiraoonline.feirao.services.ICategoriaService;

@RestController
@CrossOrigin("*")
public class CategoriaController {
	
	@Autowired
	private ICategoriaService servico;		// aqui é declaradada a interface para realizar a comunicação
	
	@GetMapping("/categoria/todos")
	public ResponseEntity<List<Categoria>> mostrarTodos() {
		return ResponseEntity.ok(servico.recuperaTodos());
	}
	
	@GetMapping("/categoria/listagem/{id}")
	public ResponseEntity<Categoria> buscarPelaCategoria(@PathVariable int id) {
		Categoria c = servico.recuperarPorId(id);
		if(c != null) {
			return ResponseEntity.ok(c);
		}
		return ResponseEntity.status(404).build();
	}

	
	@GetMapping("/categoria/{id}")
	public ResponseEntity<Categoria> mostrarPeloId(@PathVariable int id) {
		Categoria c = servico.recuperarPorId(id);
		if(c != null) {
			return ResponseEntity.ok(c);
		}
		return ResponseEntity.status(404).build();
	}
	
	@PostMapping("/categoria/cadastrar")
	public ResponseEntity<Categoria> cadastrarNova(@RequestBody Categoria categoria) {
		servico.novaCategoria(categoria);
		return ResponseEntity.ok(categoria);
	}
	
	@PutMapping("/categoria/atualizar")
	public ResponseEntity<Categoria> atualizarProduto(@RequestBody Categoria categoria) {
		servico.atualizaCategoria(categoria);
		return ResponseEntity.ok(categoria);
	}
}