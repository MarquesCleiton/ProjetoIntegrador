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
@Table(name = "Cliente")
public class Cliente {
	
	@Id  //define que este atributo é a chave primaria da tabela
	@GeneratedValue(strategy=GenerationType.IDENTITY) //faz com que ele seja auto_increment
	@Column(name="idcliente") //caso necessario criar no banco esse sera o nome
	private int idCliente;
	
	@Column(name = "nome", length = 100)
	private String nome;
	@Column(name = "endereco", length = 100)
	private String endereco;
	@Column(name = "cidade", length = 100)
	private String cidade;
	@Column(name = "estado", length = 50)
	private String estado;
	@Column(name = "cep", length = 9)
	private String cep;
	@Column(name = "email", length = 65)
	private String email;
	@Column(name = "senha", length = 20)
	private String senha;
	@Column(name = "telefone", length = 15)
	private String telefone;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "idCliente")
	@JsonIgnoreProperties("IdCliente")
	private List<Pedido> pedido;
	
	@JsonIgnoreProperties("pedido")
	
	
	public List<Pedido> getPedido() {
		return pedido;
	}
	public void setPedido(List<Pedido> pedido) {
		this.pedido = pedido;
	}
	public int getIdcliente() {
		return idCliente;
	}

	public void setIdcliente(int idcliente) {
		this.idCliente = idcliente;
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
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
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
	
	
	
	

}
