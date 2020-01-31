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
@Table(name = "entrega")
public class Entrega {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column (name = "idEntrega")
	private int idEntrega;
	@Column (name = "andamento")
	private boolean andamento;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "idEntrega")
	private List<Pedido> idPedido;
	@JsonIgnoreProperties("idEntrega")
	
	public void setIdPedido(List<Pedido> idPedido) {
		this.idPedido = idPedido;
	}
	public int getIdEntrega() {
		return idEntrega;
	}
	public void setIdEntrega(int idEntrega) {
		this.idEntrega = idEntrega;
	}
	public boolean isAndamento() {
		return andamento;
	}
	public void setAndamento(boolean andamento) {
		this.andamento = andamento;
	}
	public List<Pedido> getIdPedido() {
		return idPedido;
	}
}
