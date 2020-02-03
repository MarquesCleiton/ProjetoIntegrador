package br.com.feiraoonline.feirao.dao;

import org.springframework.data.repository.CrudRepository;

import br.com.feiraoonline.feirao.model.Cliente;

public interface ClienteRepo extends CrudRepository<Cliente, Integer> {

}
