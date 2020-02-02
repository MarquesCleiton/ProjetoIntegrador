package br.com.feiraoonline.feirao.controllers;

import java.util.List;

import javax.swing.JOptionPane;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.feiraoonline.feirao.model.Produto;
import br.com.feiraoonline.feirao.services.IProdutoService;

@RestController
@CrossOrigin("*")
public class ProdutoController {
	
	@Autowired
	private IProdutoService servico;	// aqui é declarada a interface para realizar a comunicação
	
	@GetMapping("/produto/todos")
	public ResponseEntity<List<Produto>> mostrarTodos() {
		return ResponseEntity.ok(servico.recuperaTodos());
	}
	
	@GetMapping("/produto/{id}")
	public ResponseEntity<Produto> mostrarPeloId(@PathVariable int id) {
		Produto p = servico.recuperarPorId(id);
			
		if(p!=null) {
			return ResponseEntity.ok(p);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping("/produto/cadastrar")
	public ResponseEntity<Produto> cadastrarNovo(@RequestBody Produto produto) {
		servico.novoProduto(produto);
		return ResponseEntity.ok(produto);
	}
	
	@PutMapping("/produto/atualizar")
	public ResponseEntity<Produto> atualizarProduto(@RequestBody Produto produto) {
		servico.atualizaProduto(produto);
		return ResponseEntity.ok(produto);
	}
}