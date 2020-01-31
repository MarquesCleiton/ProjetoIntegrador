create database feiraoonline;
use feiraoonline;

desc produto;
desc pedido;
desc entrega;

drop database feiraoonline;

create table cliente (
	idcliente	integer not null auto_increment,
	nome		varchar (100),
	endereco	varchar (100),
	cidade 		varchar (50),
	estado 		varchar (50),
	cep			varchar (10),
	email		varchar (100),
	senha		varchar (50),
	telefone	varchar (20),

	constraint pk_cliente primary key (idcliente)
);

create table categoria (
	idcategoria	integer not null auto_increment,
	categoria	varchar (20),
    
    constraint pk_categoria primary key (idcategoria)
);

create table produto (
	idproduto	integer not null auto_increment,
	idcategoria	integer not null,
	titulo		varchar (100),
	descricao	varchar (200),
	linkfoto	text,
	preco		float,
    
    constraint pk_produto 	primary key (idproduto),
    constraint fk_categoria	foreign key (idcategoria) references categoria (idcategoria)
);

create table pedido (
	idpedido	integer not null auto_increment,
	idproduto	integer not null ,
	idcliente	integer not null,
	quantidade	integer,
	dtpedido	date,
    
    constraint pk_pedido 	primary key (idpedido),
	constraint fk_prod 	foreign key (idproduto) references produto (idproduto), 
    constraint fk_cliente 	foreign key (idcliente) references cliente (idcliente)
);

create table entrega (
	identrega	integer not null auto_increment,
	idpedido	integer not null,
	andamento	boolean,
    
    constraint pk_entrega	primary key (identrega),
    constraint fk_pedido	foreign key (idpedido) references pedido (idpedido)
);