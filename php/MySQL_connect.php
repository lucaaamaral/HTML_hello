 <?php
$servername = "localhost";
$username = "tree";
$password = "treeUFPB";
$dbname = "tree";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "insert into entrada_eletro (codigo_eletro, id_user, categoria, grupo, preço, estado_eletro) values ('20190302abc5454', 1, 'a', 'a', 13, 'novo')";
    $conn ->exec($sql);
    echo "Connected successfully";
    }
catch(PDOException $e)
    {
    echo "<br>Connection failed: " . $e->getMessage();
    }
?>
