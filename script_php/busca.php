<?php
echo "<table style='border: solid 1px black;'>";
echo "<tr><th>id_user</th><th>codigo_eletro</th><th>descricao</th><th>data entrada</th></tr>";

class TableRows extends RecursiveIteratorIterator 
{
    function __construct($it) 
    {
        parent::__construct($it, self::LEAVES_ONLY);
    }

    function current() 
    {
        return "<td style='width:150px;border:1px solid black;'>" . parent::current(). "</td>";
    }

    function beginChildren() 
    {
        echo "<tr>";
    }

    function endChildren() 
    {
        echo "</tr>" . "\n";
    }
}

$servername = "localhost";
$username = "tree";
$password = "treeUFPB";
$dbname = "tree";

try 
{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $texto = $_POST["buscar"];
    $metodo = $_POST["metodo"];
   
    if($metodo == 0)
    	$stmt = $conn->prepare("SELECT id_user, codigo_eletro, descricao, data_entrada from cadastro_eletro where codigo_eletro LIKE '%' '$texto' '%' order by codigo_eletro asc");
    else if ($metodo == 1)
    	$stmt = $conn->prepare("SELECT id_user, codigo_eletro, descricao, data_entrada from cadastro_eletro where descricao LIKE '%' '$texto' '%' order by descricao asc");
    else if ($metodo == 2)
    	$stmt = $conn->prepare("SELECT id_user, codigo_eletro, descricao, data_entrada from cadastro_eletro a where data_entrada LIKE '%' '$texto' '%' order by data_entrada asc");
    else if ($metodo == 3)
    	$stmt = $conn->prepare("SELECT id_user, codigo_eletro, descricao, data_entrada from cadastro_eletro where id_user LIKE '%' '$texto' '%' order by id_user asc");
    else
    	$stmt = $conn->prepare("SELECT id_user, codigo_eletro, descricao, data_entrada from cadastro_eletro where id_user LIKE '%' '$texto' '%' order by id_user asc");
  
    //$stmt = $conn->prepare("SELECT id_user, codigo_eletro, descricao FROM cadastro_eletro");
    $stmt->execute();

    // set the resulting array to associative
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
    foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) {
        echo $v;
    }
}
catch(PDOException $e) 
{
    echo "Error: " . $e->getMessage();
}
$conn = null;
echo "</table>";

?> 
