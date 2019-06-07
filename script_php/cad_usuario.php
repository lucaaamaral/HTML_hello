 <?php
$server = "localhost";
$user = "tree";
$passwd = "treeUFPB";
$dbname = "tree";

try {
    $conn = new PDO("mysql:host=$server;dbname=$dbname", $user, $passwd);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//pesquisar por cpf cadastrado antes de cadastrar novo
//pegar ultimo numero id salvo

	$id = 0;


    $sql = "INSERT INTO MyGuests (id, nome, senha, email, cpf)
    VALUES ($id, $_POST["nome"], $_POST["senha"], $_POST["email"], $_POST["cpf"])";

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
