create database feiraoonline;
use feiraoonline;

insert into cliente values (null, '12345-679', 'teste1', 'teste1@teste1', 'rua teste 1', 'TESTE 1', 'teste1','t1st1','(11)11111-1111');
insert into categoria values (null, 'fruta');
insert into produto values (null, 'teste1','linkTeste1',1,'teste1',1);
insert into entrega values (null, 1);
insert into pedido values (null, '10-10-2010', 1,1,1);
insert into itens values (null, 1,1);

select * from cliente;
select * from categoria; 
select * from produto;
select * from entrega;
select * from pedido;
select * from itens;

desc cliente;
desc categoria; 
desc produto;
desc entrega;
desc pedido;
desc itens;
