package br.com.feiraoonline.feirao.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
<<<<<<< HEAD
import javax.persistence.ManyToOne;
=======
>>>>>>> 078e79080b87bd776008e2d8190d27ab4ac4ff19
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "entrega")
public class Entrega {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column (name = "idEntrega")
	private int idEntrega;
	@Column (name = "andamento")
	private boolean andamento;
<<<<<<< HEAD
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "idEntrega")
	private List <Pedido> idPedido;
=======
>>>>>>> 078e79080b87bd776008e2d8190d27ab4ac4ff19
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "idEntrega")
	private List<Pedido> idPedido;
	
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
