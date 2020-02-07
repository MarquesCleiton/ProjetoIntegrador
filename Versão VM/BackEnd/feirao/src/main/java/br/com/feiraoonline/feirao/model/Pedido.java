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

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
	@JsonIgnoreProperties("pedido")
	Cliente cliente;
	
	@ManyToOne
	@JsonIgnoreProperties("pedido")
	Entrega entrega;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "pedido")
	@JsonIgnoreProperties("pedido")
	List<Itens> itens;

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

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public Entrega getEntrega() {
		return entrega;
	}

	public void setEntrega(Entrega entrega) {
		this.entrega = entrega;
	}

	public List<Itens> getItens() {
		return itens;
	}

	public void setItens(List<Itens> itens) {
		this.itens = itens;
	}
	
	
}
