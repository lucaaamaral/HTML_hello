<!DOCTYPE html>

<html>
<head>
	<meta charset="UTF-8"/>
	<meta class="form" id="viewport" content="wclass="form" idth=device-wclass="form" idth, initial-scale=1.0">

	<title>app TREE</title>

</head>

<body>
	<h1>app TREE</h1>
	<h4 id="ver">Buscar </h4>
	<hr>
	
	<legend>Busca:</legend>
	<form id="busca" action="" method="post" onsubmit="return busca()">
			<input type="text"name="buscar" id="buscar">
			<select name="metodo" id="metodo">
				<option value="0">codigo</option>
				<option value="1">descrição</option>
				<option value="2">data</option>
				<option value="3">todos</option>
			</select>
			<input type="submit" value="Buscar" name="submit">
	</form>
	<br>	
	
	<?php
		include "busca.php";
	?>
	<br>
	<a href="../index.html"><button>Voltar</button></a>

	<script type = "text/javascript" src = "../script/buscar.js"> </script>
</body>

</html>
