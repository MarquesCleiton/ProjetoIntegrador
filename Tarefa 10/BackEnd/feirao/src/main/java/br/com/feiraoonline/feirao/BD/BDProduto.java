package br.com.feiraoonline.feirao.BD;
//TESTE
import java.util.ArrayList;

import br.com.feiraoonline.feirao.model.Produto;

public class BDProduto {
	public ArrayList <Produto> lista; //Lista guarda todos os produtos e faz a busca dos mesmos
	
	public BDProduto() {
		lista = new ArrayList <Produto>(); //Criando um espaço na memoria utilizando a classe Produto
	}
	//Abaixo será realizado o CRUD 
	
	
	//Create
	public void guardar(Produto produto) {
		lista.add(produto);
	}
	
	//Read
	public Produto buscar(int id) {
		
		Produto produto = new Produto();
		
		for(Produto p: lista) {
			if(p.getIdProduto() == id) {
				produto = p;
				break;
			}
		}
		return produto;
	}
	
	//Update
	public boolean atualizar(Produto produto) {
		int posicao = -1;
		
		for(int i = 0 ; i < lista.size(); i++) {
			if(lista.get(i).getIdProduto() == produto.getIdProduto()) {
				posicao = i;
			}
		}
		if(posicao >= 0 ) {
			lista.set(posicao, produto);
			return true;
		}
		return false;
	}
	
	//Delete
	public boolean apagar(int id) {
		int posicao = -1;
		for(int i = 0; i < lista.size(); i++) {
			if(lista.get(i).getIdProduto() == id) {
				posicao = i;
			}
		}
		
		if(posicao >= 0) { //Aqui o remove é um método da ArrayList, que removerá (o produto) atrvés do ID e posicao
			lista.remove(posicao);
			return true;
		}
		return false;
	}
	
	//Mostrar Tudo
	public ArrayList <Produto> buscaTodos(){
		return this.lista;
	}
		
}
 