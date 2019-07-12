INSERT INTO usuario(nome_user, senha_user) VALUES ('João', '1234');
INSERT INTO usuario(nome_user, senha_user) VALUES ('Fernanda', '0101');
INSERT INTO usuario(nome_user, senha_user) VALUES ('Lara', 'abc999');
INSERT INTO usuario(nome_user, senha_user) VALUES ('Paulo', '000ab');
INSERT INTO usuario(nome_user, senha_user) VALUES ('Henrique', 'rs8989');
INSERT INTO usuario(nome_user, senha_user) VALUES ('Gabriela', '56hds');
INSERT INTO usuario(nome_user, senha_user) VALUES ('Rafael', '90klkm');

INSERT INTO cadastro_eletro(codigo_eletro, id_user, descricao, categoria, grupo, fabricante, preço, peso, estado_eletro, serie, ref_modelo, origem, obs, data_entrada) VALUES ('20180911C3B1', 5, 'Mouse', 'C', 3, 'Leadership', 12.5, 0.2, 'Não funciona', '4,58711E+12', 'bigScroll', 'Doação', 'Usado', CURRENT_DATE);
INSERT INTO cadastro_eletro(codigo_eletro, id_user, descricao, categoria, grupo, fabricante, preço, peso, estado_eletro, serie, ref_modelo, origem, obs, data_entrada) VALUES ('20180911C3B2', 5, 'Mouse', 'C', 3, 'MITSUMI ELECTRIC', 10.5, 0.2, 'Não funciona', '1512132','ECM-S6802', 'Doação','Usado', CURRENT_DATE);
INSERT INTO cadastro_eletro(codigo_eletro, id_user, descricao, categoria, grupo, fabricante, preço, peso, estado_eletro, serie, ref_modelo, origem, obs, data_entrada) VALUES ('20180911C3B3', 3, 'Mouse', 'C', 3, 'Clone', 8.5, 0.2, 'Não funciona', '69100035588', '6219', 'Doação','Semi-novo', CURRENT_DATE);
INSERT INTO cadastro_eletro(codigo_eletro, id_user, descricao, categoria, grupo, fabricante, preço, peso, tombamento, estado_eletro, serie, ref_modelo, origem, obs, data_entrada) VALUES ('20180911C3B4', 4, 'Mouse', 'C', 3, 'Pisc', 10, 0.2, '1234ab', 'Funciona',  'MTK160832299', '1807', 'Doação','Semi-novo', CURRENT_DATE);

INSERT INTO venda_eletro(id_user, codigo_eletro, destino, data_saida) VALUES (2, '20180911C3B4', 'LEAD', CURRENT_DATE);
INSERT INTO venda_eletro(id_user, codigo_eletro, destino, data_saida) VALUES (3, '20180911C3B2', 'LEAD', CURRENT_DATE);
INSERT INTO venda_eletro(id_user, codigo_eletro, destino, data_saida) VALUES (1, '20180911C3B1', 'LAC', CURRENT_DATE);
INSERT INTO venda_eletro(id_user, codigo_eletro, destino, data_saida) VALUES (5, '20180911C3B3', 'LPS', CURRENT_DATE);

INSERT INTO provedor_eletro(id_user, codigo_eletro, origem, data_entrada) VALUES (2, '20180911C3B4', 'LEAD', CURRENT_DATE);
INSERT INTO provedor_eletro(id_user, codigo_eletro, origem, data_entrada) VALUES (7, '20180911C3B2', 'LEAD', CURRENT_DATE);
INSERT INTO provedor_eletro(id_user, codigo_eletro, origem, data_entrada) VALUES (2, '20180911C3B1', 'LAC', CURRENT_DATE);
INSERT INTO provedor_eletro(id_user, codigo_eletro, origem, data_entrada) VALUES (4, '20180911C3B3', 'LPS', CURRENT_DATE);
INSERT INTO provedor_eletro(id_user, codigo_eletro, origem, data_entrada) VALUES (6, '20180911C3B4', 'LEAD', CURRENT_DATE);
INSERT INTO provedor_eletro(id_user, codigo_eletro, origem, data_entrada) VALUES (1, '20180911C3B2', 'LEAD', CURRENT_DATE);

INSERT INTO receptor_eletro(id_user, codigo_eletro, destino, data_saida) VALUES (3, '20180911C3B4', 'LEAD', CURRENT_DATE);
INSERT INTO receptor_eletro(id_user, codigo_eletro, destino, data_saida) VALUES (6, '20180911C3B2', 'LEAD', CURRENT_DATE);
INSERT INTO receptor_eletro(id_user, codigo_eletro, destino, data_saida) VALUES (1, '20180911C3B1', 'LAC', CURRENT_DATE);
INSERT INTO receptor_eletro(id_user, codigo_eletro, destino, data_saida) VALUES (5, '20180911C3B3', 'LPS', CURRENT_DATE);
INSERT INTO receptor_eletro(id_user, codigo_eletro, destino, data_saida) VALUES (3, '20180911C3B4', 'LAC', CURRENT_DATE);
INSERT INTO receptor_eletro(id_user, codigo_eletro, destino, data_saida) VALUES (4, '20180911C3B2', 'PET', CURRENT_DATE);
