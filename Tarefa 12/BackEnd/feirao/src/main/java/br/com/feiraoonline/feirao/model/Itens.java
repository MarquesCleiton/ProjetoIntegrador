package br.com.feiraoonline.feirao.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="itens")
public class Itens {
	
	@Id
	@GeneratedValue (strategy=GenerationType.IDENTITY)
	@Column(name="iditens")
	private int idItens;
	@ManyToOne
	private Produto idProduto;
	@ManyToOne
	private Pedido idPedido;
	public int getIdItens() {
		return idItens;
	}
	public void setIdItens(int idItens) {
		this.idItens = idItens;
	}
	public Produto getProduto() {
		return idProduto;
	}
	public void setProduto(Produto produto) {
		this.idProduto = produto;
	}
	public Pedido getPedido() {
		return idPedido;
	}
	public void setPedido(Pedido pedido) {
		this.idPedido = pedido;
	}
	
	
}
