package br.com.feiraoonline.feirao.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="pedido")
public class Pedido {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idpedido")
	private int idPedido;
	@Column(name = "quantidade")
	private int quantidade;
	@Column(name = "dtpedido")
	private String dtpedido;
	
	@ManyToOne
	private Cliente idCliente;
	@ManyToOne
	private Entrega idEntrega;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "idPedido")
	private List<Itens> idItens;

	public int getIdPedido() {
		return idPedido;
	}
	public void setIdPedido(int idPedido) {
		this.idPedido = idPedido;
	}
	public int getQuantidade() {
		return quantidade;
	}
	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}
	public String getDtpedido() {
		return dtpedido;
	}
	public void setDtpedido(String dtpedido) {
		this.dtpedido = dtpedido;
	}
	public Cliente getIdCliente() {
		return idCliente;
	}
	public void setIdCliente(Cliente idCliente) {
		this.idCliente = idCliente;
	}
	public Entrega getIdEntrega() {
		return idEntrega;
	}
	public void setIdEntrega(Entrega idEntrega) {
		this.idEntrega = idEntrega;
	}
	public List<Itens> getIdItens() {
		return idItens;
	}
	public void setIdItens(List<Itens> idItens) {
		this.idItens = idItens;
	}

	
}
