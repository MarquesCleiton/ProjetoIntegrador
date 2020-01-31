package br.com.feiraoonline.feirao.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="produto")
public class Produto {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="idCliente")
	private int 	idCliente;
	
	@Column(name="nome", length = 100)
	private String nome;
	
	@Column(name="endereco", length = 50)
	private String 	endereco;
	
	@Column(name="cidade", length = 50)
	private String 	cidade;
	
	@Column(name="cep")
	private String 	cep;
	
	@Column(name="email", length = 100)
	private String 	email;
	
	@Column(name="senha")
	private String 	senha;
	
	@Column(name="telefone")
	private String 	telefone;
	
	@Column(name="idcategoria")
	@ManyToOne
	@JsonIgnoreProperties("produto")
	private Categoria idCategoria;
	
	public int getIdCliente() {
		return idCliente;
	}
	public void setIdCliente(int idCliente) {
		this.idCliente = idCliente;
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}		
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public String getCep() {
		return cep;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public Categoria getIdCategoria() {
		return idCategoria;
	}
	public void setIdCategoria(Categoria idCategoria) {
		this.idCategoria = idCategoria;
	}
}