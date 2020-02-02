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

import br.com.feiraoonline.feirao.model.Pedido;
import br.com.feiraoonline.feirao.services.IPedidoService;

@RestController
@CrossOrigin("*")
public class PedidoController {
	@Autowired
	private IPedidoService servico;
	
	@GetMapping("/pedido/todos")
	public ResponseEntity<List<Pedido>> mostrarTodos() {
		return ResponseEntity.ok(servico.recuperaTodosPedidos());
	}
	
	@GetMapping("/pedido/{id}")
	public ResponseEntity<Pedido> mostrarPeloId(@PathVariable int id) {
		Pedido c = servico.recuperarPorId(id);
		if(c != null) {
			return ResponseEntity.ok(c);
		}
		return ResponseEntity.status(404).build();
	}
	
	@PostMapping("/pedido/cadastrar")
	public ResponseEntity<Pedido> cadastrarNova(@RequestBody Pedido pedido) {
		servico.novoPedido(pedido);
		return ResponseEntity.ok(pedido);
	}
	
	@PutMapping("/pedido/atualizar")
	public ResponseEntity<Pedido> atualizarProduto(@RequestBody Pedido pedido) {
		servico.atualizaPedido(pedido);
		return ResponseEntity.ok(pedido);
	}

}
