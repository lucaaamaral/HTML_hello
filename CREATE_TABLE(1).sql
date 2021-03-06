CREATE TABLE usuario (  -- cadastro de todos os usuarios
	id_user int NOT NULL AUTO_INCREMENT,
	nome_user char (100) NOT NULL,
	senha_user char (10) NOT NULL,
	email char (30) NOT NULL, 
	cpf char (11) NOT NULL,
	PRIMARY KEY (id_user)
	);

CREATE TABLE cadastro_eletro ( -- cadastro dos eletrônicos
	codigo_eletro char (50) NOT NULL,
	id_user int NOT NULL,
	seletor bit NOT NULL, -- SE 0 É PARA VENDA SE 1 É PARA EMPRÉSTIMO
	descricao char (30), -- APENAS QUANDO O ELETRO NÃO ESTÁ CADASTRADO NAS CATEGORIAS
	categoria smallint NOT NULL, -- SE NÃO ESTIVER NA CATEGORIA, TEM A OPÇÃO OUTROS
	grupo smallint NOT NULL,
	fabricante char (30),
	preço double NOT NULL,
	valor char (10), -- 1K ohm, 100uF...
	peso double,
	tombamento char (15),
	estado_eletro smallint NOT NULL,
	serie char (20),
	ref_modelo char (20),
	origem char (15),
	data_entrada date,
	data_aquiscao date,   -- data que comprou 
	obs char (50),
	tipo_eletro bit NOT NULL,  -- se é um eletro dependente ou independente 
	PRIMARY KEY (codigo_eletro),
	FOREIGN KEY (id_user) REFERENCES usuario(id_user)
		ON DELETE CASCADE -- SE A LINHA DE USUARIO DA TABELA PAI FOR APAGADA, OS DADOS DO ELETRONICO VÃO SER APAGADOS TBM.
		ON UPDATE CASCADE -- ATUALIZA OS DADOS DO FILHO CASO O PAI SEJA ALTERADO
	);
	
	CREATE TABLE cadastro_dependente  ( -- cadastro dos componentes derivados de eletrônicos
	codigo_dep char (50) NOT NULL,
	codigo_eletro char (50) NOT NULL DEFAULT '1',
	PRIMARY KEY (codigo_dep),
	FOREIGN KEY (codigo_eletro) REFERENCES cadastro_eletro(codigo_eletro)
		ON DELETE SET DEFAULT -- SE A LINHA DO ELETRO DA TABELA PAI FOR APAGADA, OS DADOS DO ELETRONICO DEPENDENTE SERÃO SUBST. PELO DEFAULT
		ON UPDATE CASCADE -- ATUALIZA OS DADOS DO FILHO CASO O PAI SEJA ALTERADO
	);
	
-- if (seletor==0)
	CREATE TABLE venda_eletro (  -- transação de venda
	id_saida int NOT NULL AUTO_INCREMENT,
	id_user int NOT NULL,
	codigo_eletro char (50) NOT NULL,
	data_saida date,
	destino char (15),
    PRIMARY KEY (id_saida),
	FOREIGN KEY (id_user) REFERENCES usuario(id_user)
		ON DELETE CASCADE -- SE A LINHA DE USUARIO DA TABELA PAI FOR ALTERADA, OS DADOS DA FILHA TBM SERÃO ALTERADOS.
		ON UPDATE CASCADE, -- ATUALIZA OS DADOS DO FILHO CASO O PAI SEJA ALTERADO
	FOREIGN KEY (codigo_eletro) REFERENCES cadastro_eletro(codigo_eletro)
		ON DELETE CASCADE  -- SE A LINHA DO ELETRO FOR APAGADA DA TABELA PAI, OS DADOS DA VENDA SERÃO APAGADOS
		ON UPDATE CASCADE -- ATUALIZA OS DADOS DO FILHO CASO O PAI SEJA ALTERADO
	);
	
-- if(seletor==1)
	CREATE TABLE provedor_eletro ( -- transação de empréstimo || quem empresta
	id_prov int NOT NULL AUTO_INCREMENT,
	id_user int NOT NULL,  -- quem emprestou o eletro
	codigo_eletro char (50) NOT NULL,
	origem char (15),
	data_entrada date,
	PRIMARY KEY (id_prov),
	FOREIGN KEY (id_user) REFERENCES usuario(id_user)
		ON DELETE CASCADE -- SE A LINHA DO USUARIO FOR APAGADA DA TABELA PAI, OS DADOS DO EMPRESTIMO(PROVEDOR) SERÃO APAGADOS
		ON UPDATE CASCADE, -- ATUALIZA OS DADOS DO FILHO CASO O PAI SEJA ALTERADO
	FOREIGN KEY (codigo_eletro) REFERENCES cadastro_eletro(codigo_eletro) 
		ON DELETE CASCADE-- SE A LINHA DO ELETRO FOR APAGADA DA TABELA PAI, OS DADOS DO EMPRÉSTIMO(PROVEDOR) SERÃO APAGADOS
		ON UPDATE CASCADE -- ATUALIZA OS DADOS DO FILHO CASO O PAI SEJA ALTERADO
	);
	
	CREATE TABLE receptor_eletro ( -- transação de empréstimo || quem recebe
	id_recep int NOT NULL AUTO_INCREMENT,
	id_user int NOT NULL, -- quem pegou o eletro
	codigo_eletro char (50) NOT NULL,
	data_saida date,
	destino char (15),
	PRIMARY KEY (id_recep),
	FOREIGN KEY (id_user) REFERENCES usuario(id_user)
		ON DELETE CASCADE -- SE A LINHA DO USUARIO FOR APAGADA DA TABELA PAI, OS DADOS DO EMPRESTIMO(RECEPTOR) SERÃO APAGADOS
		ON UPDATE CASCADE, -- ATUALIZA OS DADOS DO FILHO CASO O PAI SEJA ALTERADO		
	FOREIGN KEY (codigo_eletro) REFERENCES cadastro_eletro(codigo_eletro) 
		ON DELETE CASCADE -- SE A LINHA DO ELETRO FOR APAGADA DA TABELA PAI, OS DADOS DO EMPRÉSTIMO(RECEPTOR) SERÃO APAGADOS
		ON UPDATE CASCADE -- ATUALIZA OS DADOS DO FILHO CASO O PAI SEJA ALTERADO
	);
	
	
