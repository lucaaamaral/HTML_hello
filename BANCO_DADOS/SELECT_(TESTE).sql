SELECT b.id_saida, a.id_user, b.id_user, a.codigo_eletro, a.data_entrada, b.data_saida  from cadastro_eletro a, venda_eletro b where (a.codigo_eletro=b.codigo_eletro) order by b.id_saida asc -- DADOS DE ID_SAIDA, NOME_ENTRADA, NOME_SAIDA, CODIG0_ELETRO (ORDENA POR ID_SAIDA) ASC
SELECT b.id_recep, a.id_user, b.id_user, a.codigo_eletro, a.data_entrada, b.data_saida from provedor_eletro a, receptor_eletro b where (b.id_recep = a.id_prov) order by b.id_recep asc -- DADOS DE ID_SAIDA, ID_USER, ID_USER, CODIG0_ELETRO (ORDENA POR ID_RECEP) ASC

