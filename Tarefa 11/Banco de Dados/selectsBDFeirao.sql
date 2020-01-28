-- Exibe todos os dados dos clientes
select * from cliente;

-- Lista de produtos cadastrados 
select * from produto;

-- Categoria de produtos
select * from categoria;

-- Junção dos produtos com sua categoria
select produto.titulo, categoria.categoria from produto
inner join categoria using (idCategoria);

-- Junção das tabelas Cliente, Produto e pedido
select cliente.nome, produto.titulo, pedido.quantidade, pedido.dtPedido from pedido 
inner join produto using (idProduto) 
inner join cliente using (idCliente);

-- junção das tabelas Cliente Produto e Entrega
select cliente.nome, produto.titulo, entrega.andamento from entrega
inner join pedido using (idPedido)
inner join produto using (idProduto)
inner join cliente using (idCliente);