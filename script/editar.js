var cod = document.getElementById("codigo");
var descricao = document.getElementById("descricao_ed");
var valor = document.getElementById("valor_ed");
var origem = document.getElementById("origem_ed");
var patrimonio = document.getElementById("patrimonio_ed");

cod.onblur =  function(){on_blur1()}	
cod.onfocus = function(){on_focus1()}
descricao.onblur =  function(){on_blur2()}	
descricao.onfocus = function(){on_focus2()}
valor.onblur =  function(){on_blur3()}	
valor.onfocus = function(){on_focus3()}
origem.onblur =  function(){on_blur4()}	
origem.onfocus = function(){on_focus4()}
patrimonio.onblur =  function(){on_blur5()}	
patrimonio.onfocus = function(){on_focus5()}

function on_blur1()
{
	if (cod.value == '')
	{
		cod.value = "Código";
	}	
}

function on_focus1()
{
	if (cod.value == "Código")
	{
		cod.value = '';
	}
}


function on_blur2()
{
	if (descricao.value == '')
	{
		descricao.value = "Insira as novas alterações sobre a descrição do equipamento";
	}	
}

function on_focus2()
{
	if (descricao.value == "Insira as novas alterações sobre a descrição do equipamento")
	{
		descricao.value = '';
	}
}


function on_blur3()
{
	if (valor.value == '')
	{
		valor.value = "Insira as novas alterações sobre o valor do equipamento";
	}	
}

function on_focus3()
{
	if (valor.value == "Insira as novas alterações sobre o valor do equipamento")
	{
		valor.value = '';
	}
}

function on_blur4()
{
	if (origem.value == '')
	{
		origem.value = "Insira as novas alterações sobre a origem do equipamento";
	}	
}

function on_focus4()
{
	if (origem.value == "Insira as novas alterações sobre a origem do equipamento")
	{
		origem.value = '';
	}
}

function on_blur5()
{
	if (patrimonio.value == '')
	{
		patrimonio.value = "Insira as novas alterações sobre o patrimônio do equipamento";
	}	
}

function on_focus5()
{
	if (patrimonio.value == "Insira as novas alterações sobre o patrimônio do equipamento")
	{
		patrimonio.value = '';
	}
}


function show_estado()
{
	if (document.getElementById("editar_val").value == "E")
	{
		document.getElementById("ver").innerHTML = "E"
		document.getElementById("estado_ed").hidden = false
		document.getElementById("descricao_ed").hidden = true
		document.getElementById("valor_ed").hidden = true
		document.getElementById("origem_ed").hidden = true		
		document.getElementById("patrimonio_ed").hidden = true
		valor.value = "Insira as novas alterações sobre o valor do equipamento";
		origem.value = "Insira as novas alterações sobre a origem do equipamento";
		descricao.value =  "Insira as novas alterações sobre a descrição do equipamento";
		patrimonio.value = "Insira as novas alterações sobre o patrimônio do equipamento";
	}
	else if (document.getElementById("editar_val").value == "A")
	{
		document.getElementById("ver").innerHTML = "A"
		document.getElementById("estado_ed").hidden = true
		document.getElementById("descricao_ed").hidden = false
		document.getElementById("valor_ed").hidden = true
		document.getElementById("origem_ed").hidden = true		
		document.getElementById("patrimonio_ed").hidden = true
		valor.value = "Insira as novas alterações sobre o valor do equipamento";
		origem.value = "Insira as novas alterações sobre a origem do equipamento";
		patrimonio.value = "Insira as novas alterações sobre o patrimônio do equipamento";
		
	}
	else if (document.getElementById("editar_val").value == "B")
	{
		document.getElementById("ver").innerHTML = "B"
		document.getElementById("estado_ed").hidden = true
		document.getElementById("descricao_ed").hidden = true
		document.getElementById("valor_ed").hidden = false
		document.getElementById("origem_ed").hidden = true		
		document.getElementById("patrimonio_ed").hidden = true
		origem.value = "Insira as novas alterações sobre a origem do equipamento";
		descricao.value =  "Insira as novas alterações sobre a descrição do equipamento";
		patrimonio.value = "Insira as novas alterações sobre o patrimônio do equipamento";
	}
	else if (document.getElementById("editar_val").value == "C")
	{
		document.getElementById("ver").innerHTML = "C"
		document.getElementById("estado_ed").hidden = true
		document.getElementById("descricao_ed").hidden = true
		document.getElementById("valor_ed").hidden = true
		document.getElementById("origem_ed").hidden = false		
		document.getElementById("patrimonio_ed").hidden = true
		valor.value = "Insira as novas alterações sobre o valor do equipamento";
		descricao.value =  "Insira as novas alterações sobre a descrição do equipamento";
		patrimonio.value = "Insira as novas alterações sobre o patrimônio do equipamento";
	}
	else if (document.getElementById("editar_val").value == "D")
	{
		document.getElementById("ver").innerHTML = "D"
		document.getElementById("estado_ed").hidden = true
		document.getElementById("descricao_ed").hidden = true
		document.getElementById("valor_ed").hidden = true
		document.getElementById("origem_ed").hidden = true		
		document.getElementById("patrimonio_ed").hidden = false
		valor.value = "Insira as novas alterações sobre o valor do equipamento";
		origem.value = "Insira as novas alterações sobre a origem do equipamento";
		descricao.value =  "Insira as novas alterações sobre a descrição do equipamento";
	}
	
}



