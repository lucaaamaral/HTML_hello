<?php
/*

cadastro_eletro:
	codigo_eletro 	[interno = gerar]
	id_user int 	[interno = atribuir]
*/

//AJUSTAR QUANDO BANCO ESTIVER PRONTO

$server = "localhost";
$user = "tree";
$passwd = "treeUFPB";
$dbname = "tree";

	
  

		$j = $_POST["numero"];
		//rolar de 0 ate "numero"
		for($i=1; $i<=$j; $i++)
		{
			try 
			{
				 $conn = new PDO("mysql:host=$server;dbname=$dbname", $user, $passwd);
				 $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		
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
	
				//modificar codigo gerado
				$id = '2019'.$cat.$grupo.$desc;
				$id_user = 34;
			
	
				$sql = "INSERT INTO cadastro_eletro (codigo_eletro, id_user, seletor, descricao, categoria, grupo, fabricante, preço, valor, peso, tombamento, estado_eletro, serie, ref_modelo, origem, data_aquiscao, obs) VALUES ('$id', '$id_user', '$seletor', '$desc', '$cat', '$grupo', '$fabricante', '$preco', '$valor', '$peso', '$tombamento', '$estado_eletro', '$serie', '$ref_modelo', '$origem', '$data_aquisicao', '$obs')";
	
		 // use exec() because no results are returned
		 $conn->exec($sql);
		 echo "New record created successfully";
		 }
	catch(PDOException $e)
		 {
		 echo $sql . "<br>" . $e->getMessage();
		 }
		 $conn = null;
}


?> 
