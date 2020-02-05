package br.com.feiraoonline.feirao.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="itens")
public class Itens {
	
	@Id
	@GeneratedValue (strategy=GenerationType.IDENTITY)
	private int idItens;
	
	@ManyToOne
	@JsonIgnoreProperties("itens")
	Pedido pedido;
	
	@ManyToOne
	@JsonIgnoreProperties("produto")
	Produto produto;

	public int getIdItens() {
		return idItens;
	}

	public void setIdItens(int idItens) {
		this.idItens = idItens;
	}

	public Pedido getPedido() {
		return pedido;
	}

	public void setPedido(Pedido pedido) {
		this.pedido = pedido;
	}

	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}
	
	
}
