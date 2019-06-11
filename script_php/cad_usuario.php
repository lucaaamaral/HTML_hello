 <?php

//AJUSTAR QUANDO BANCO ESTIVER PRONTO

$server = "localhost";
$user = "tree";
$passwd = "treeUFPB";
$dbname = "tree";

try {
    $conn = new PDO("mysql:host=$server;dbname=$dbname", $user, $passwd);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
//pesquisar por cpf cadastrado antes de cadastrar novo
	$cpf		= $_POST["cpf"];
		{
			//para testes apenas ---- modificar parametro id_user por cpf quando banco estiver configurado
			//AJUSTE AQUI!!!
			$sql = 'SELECT id_user FROM usuario WHERE id_user=0';
			try 
			{
				$stmt = $conn->query($sql);
				$result = $stmt->fetch(PDO::FETCH_NUM);
				$cpf_em_uso = $result[0];
			}
			catch(PDOException $e)
			{
				print $e->getMessage();
			}
		}	
	if($cpf_em_uso)
	{
		echo	'EM USO!';
		$conn = null;
		exit;
	}

	
	$log 		= $_POST["nome"];
	$sen		= $_POST["senha"];
	$email	= $_POST["email"];
		
	//Atualizar BD no computador e modificar a linha seguinte para cadastrar usuarios
	//AJUSTE AQUI!!!
    $sql = "INSERT INTO usuario (nome_user, senha_user) VALUES ('$log','$sen')";
	

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
