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
@Table(name="produto")
public class Produto {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="idProduto")
	private int 	idProduto;
	
	@Column(name="descricao", length = 50)
	private String 	descricao;
	
	@Column(name="titulo", length = 50)
	private String 	titulo;
	
	@Column(name="linkFoto")
	private String 	linkFoto;
	
	@Column(name="preco", length = 100)
	private String 	preco;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "produto")
	@JsonIgnoreProperties("produto")
	List<Itens> itens;
	
	@ManyToOne
	@JsonIgnoreProperties("produto")
	Categoria categoria;

	public int getIdProduto() {
		return idProduto;
	}

	public void setIdProduto(int idProduto) {
		this.idProduto = idProduto;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getLinkFoto() {
		return linkFoto;
	}

	public void setLinkFoto(String linkFoto) {
		this.linkFoto = linkFoto;
	}

	public String getPreco() {
		return preco;
	}

	public void setPreco(String preco) {
		this.preco = preco;
	}

	public List<Itens> getItens() {
		return itens;
	}

	public void setItens(List<Itens> itens) {
		this.itens = itens;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
	
	
	
}