<?php
/*

cadastro_eletro:
	codigo_eletro 	[interno = gerar]
	id_user int 	[interno = atribuir]
	seletor bit 	[EXPLICITO]
	descricao 		[EXPLICITO]
	categoria 		[EXPLICITO]
	grupo 			[EXPLICITO]
	fabricante 		[EXPLICITO]
	preço 			[EXPLICITO]
	valor 			[EXPLICITO]
	peso 				[EXPLICITO]
	tombamento 		[EXPLICITO]
	estado_eletro 	[EXPLICITO]
	serie 			[EXPLICITO]
	ref_modelo 		[EXPLICITO]
	origem 			[EXPLICITO]
	data_entrada 	[EXPLICITO]
	data_aquiscao 	[EXPLICITO]
	obs 				[EXPLICITO]
*/



//AJUSTAR QUANDO BANCO ESTIVER PRONTO

$server = "localhost";
$user = "tree";
$passwd = "treeUFPB";
$dbname = "tree";




	try {
    $conn = new PDO("mysql:host=$server;dbname=$dbname", $user, $passwd);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  

		$i = $_POST["numero"];
		
		$seletor 			= $_POST["{$i}_0"];
		$desc				 	= $_POST["{$i}_1"];
		$cat				 	= $_POST["{$i}_2"];
		$grupo 		 		= $_POST["{$i}_3"];
		$fabricante 		= $_POST["{$i}_4"];
		$preco 		 		= $_POST["{$i}_5"];
		$valor 				= $_POST["{$i}_6"];
		$peso 				= $_POST["{$i}_7"];
		$tombamento 	 	= $_POST["{$i}_8"];
		$estado_eletro  	= $_POST["{$i}_9"];
		$serie 			 	= $_POST["{$i}_10"];
		$ref_modelo			= $_POST["{$i}_11"];
		$origem 			 	= $_POST["{$i}_12"];
		$data_aquiscao 	= $_POST["{$i}_13"];
		$obs 				 	= $_POST["{$i}_14"];
	
		//gerar id automaticamente
		// $id = id_gen();
	
		$id = 8;
	
		$sql = "INSERT INTO cadastro_eletro (codigo_eletro, id_user, seletor, descricao, categoria, grupo, fabricante, preço, valor, peso, tombamento, estado_eletro, serie, ref_modelo, origem, data_aquiscao, obs) VALUES ('$id', '1', '$seletor', '$desc', '$cat', '$grupo', '$fabricante', '$preco', '$valor', '$peso', '$tombamento', '$estado_eletro', '$serie', '$ref_modelo', '$origem', '$data_aquisicao', '$obs')";
	

    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;

?> 
