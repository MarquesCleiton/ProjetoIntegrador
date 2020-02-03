package br.com.feiraoonline.feirao.dao;

import org.springframework.data.repository.CrudRepository;

import br.com.feiraoonline.feirao.model.Itens;

public interface ItensRepo extends CrudRepository<Itens, Integer> {

}
