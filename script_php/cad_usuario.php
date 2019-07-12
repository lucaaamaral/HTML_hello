 <?php

//AJUSTAR QUANDO BANCO ESTIVER PRONTO

$server = "localhost";
$user = "tree";
$passwd = "treeUFPB";
$dbname = "tree";

try {
    $conn = new PDO("mysql:host=$server;dbname=$dbname", $user, $passwd);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
//pesquisar por cpf e email cadastrado antes de cadastrar novo
	$cpf		= $_POST["cpf"];
	$email	= $_POST["email"];
	
		{
			try //verificação email e cpf em uso -- segurança, fazer antes em javascript
			{
				$sql = "SELECT id_user FROM usuario WHERE CPF_user='{$cpf}'";
				$stmt = $conn->query($sql);
				$result = $stmt->fetch(PDO::FETCH_NUM);
				$cpf_em_uso = $result[0];
				$sql = "SELECT id_user FROM usuario WHERE CPF_user='{$email}'";				
				$stmt = $conn->query($sql);
				$result = $stmt->fetch(PDO::FETCH_NUM);
				$email_em_uso = $result[0];
			}
			catch(PDOException $e)
			{
				print $e->getMessage();
			}
		}	
	if($cpf_em_uso || $email_em_uso)
	{
		echo	'EM USO!', '; email: ', $email_em_uso, '; cpf ', $cpf_em_uso, '; mostra o id utilizado para cada parametro';
		$conn = null;
		exit;
	}
	
	$log 		= $_POST["nome"];
	$sen		= $_POST["senha"];
	//$email	= $_POST["email"];	já definido
	//$cpf	= $_POST["cpf"]; 		já definido antes
   $sql = "INSERT INTO usuario (nome_user, senha_user, email_user, CPF_user) VALUES ('$log','$sen', '$email', '$cpf')";
	

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
