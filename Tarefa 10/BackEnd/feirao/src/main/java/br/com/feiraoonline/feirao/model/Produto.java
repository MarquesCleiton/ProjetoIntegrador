package br.com.feiraoonline.feirao.model;

public class Produto {
	
	int idProduto;
	String titulo;
	String detalhes;
	String linkFoto;
	float preco;
	int qtdEstoque;
	
	
	
	public Produto(int idProduto, String titulo, String detalhes, String linkFoto, float preco, int qtdEstoque) {
		super();
		this.idProduto = idProduto;
		this.titulo = titulo;
		this.detalhes = detalhes;
		this.linkFoto = linkFoto;
		this.preco = preco;
		this.qtdEstoque = qtdEstoque;
	}

	public Produto() {}

	public int getIdProduto() {
		return idProduto;
	}

	public void setIdProduto(int idProduto) {
		this.idProduto = idProduto;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDetalhes() {
		return detalhes;
	}

	public void setDetalhes(String detalhes) {
		this.detalhes = detalhes;
	}

	public String getLinkFoto() {
		return linkFoto;
	}

	public void setLinkFoto(String linkFoto) {
		this.linkFoto = linkFoto;
	}

	public float getPreco() {
		return preco;
	}

	public void setPreco(float preco) {
		this.preco = preco;
	}

	public int getQtdEstoque() {
		return qtdEstoque;
	}

	public void setQtdEstoque(int qtdEstoque) {
		this.qtdEstoque = qtdEstoque;
	}

}
