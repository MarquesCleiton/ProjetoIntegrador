package br.com.feiraoonline.feirao.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.feiraoonline.feirao.dao.ProdutoRepo;
import br.com.feiraoonline.feirao.model.Produto;

@Component
public class ProdutoService implements IProdutoService {

	@Autowired
	private ProdutoRepo repo;

	@Override
	public List<Produto> recuperaTodos() { // aqui recupera todos os produtos
		return (List<Produto>) repo.findAll();
	}

	@Override
	public Produto recuperarPorId(int id) { // aqui recupera os produtos pelo ID do mesmo
		try {
			return repo.findById(id).get();
		} catch (Exception ex) {
			return null;
		}
	}

	@Override
	public void novoProduto(Produto produto) { // aqui adiciona um novo produto
		repo.save(produto);

	}

	@Override
	public void atualizaProduto(Produto produto) { // aqui atualiza um produto que foi adicionado
		repo.save(produto);
	}
	
	@Override
	public void apagarProduto(int id) {
		repo.deleteById(id);
	}
}
