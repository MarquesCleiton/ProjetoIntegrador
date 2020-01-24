package br.com.feiraoonline.feirao.controller;

import java.util.ArrayList;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.feiraoonline.feirao.BD.BDProduto;
import br.com.feiraoonline.feirao.model.Produto;

@RestController
@CrossOrigin("*")
public class ProdutoController {

	private BDProduto bd = new BDProduto();

	// CREATE
	@PostMapping("/produto/novo") // Abaixo o @Requestbody pega o corpo da requisição: JSON PRODUTO.
	
	public ResponseEntity<Produto> novoProduto(@RequestBody Produto produto) {
		bd.guardar(produto);
		return ResponseEntity.ok(produto); 
	}

	// READ - Esse refere-se a um produto específico
	@GetMapping("/produto/{id}") // {VARIAVEL}
	
	// @PathVariable associa o parametro do URL a variável de mesmo nome
	public ResponseEntity<Produto> getProduto(@PathVariable int id) {
		Produto p = bd.buscar(id);
		if (p != null) { // Aqui encontrou o produto
			return ResponseEntity.ok(p);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	// READ - Esse refere-se ao listar TODOS os produtos
	@GetMapping("/produto/todos")
	public ResponseEntity<ArrayList<Produto>> getTodos() {
		return ResponseEntity.ok(bd.buscaTodos()); //ResponseEntity é uma classe do Springboot que responde as requisições do site
	}

	// UPDATE
	@PutMapping("/produto/atualizar")
	public ResponseEntity<Produto> atualiza(@RequestBody Produto produto) {
		if (bd.atualizar(produto)) {
			return ResponseEntity.ok(produto);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	
	//DELETE
	@DeleteMapping("/produto/apagar/{id}")
	public ResponseEntity<String> apagar(@PathVariable int id) {
		if(bd.apagar(id)) {
			return ResponseEntity.ok("APAGADO");
		}
		return ResponseEntity.notFound().build();
	}
}
