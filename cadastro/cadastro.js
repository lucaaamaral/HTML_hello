var formulario = document.getElementsByClassName("form");
//.onfocus;// = focused(this);
//document.getElementsByClass("form").onblur = focusout(this);
var i, k = formulario.length;
for (i=0; i<k; i++)
{
	if(formulario[i].type == "text")
	{
		formulario[i].onfocus = function onfocus(event) {focused(this)}
		formulario[i].onblur = function onblur(event) {focusout(this)}
		formulario[i].value = formulario[i].id
		//formu[i].value = formu[i].onfocus;
	}
}

function focused(obj)
{
	if (obj.value == obj.id)
	{
		obj.value = '';
	}
}

function focusout(obj)
{
	if (obj.value == '')
	{
		obj.value = obj.id;
	}
}


function show_grupo()
{
	if (document.getElementById("categoria").value == "C")
	{
		document.getElementById("ver").innerHTML = "C"
		document.getElementById("grupo").hidden = false
	}
	else
	{
		document.getElementById("grupo").hidden = true
	}
	
}


function local_save()
{
	
	if(localStorage.requisition)
	{
		//document.getElementById("ver").innerHTML = Number(localStorage.requisition)
		localStorage.requisition = Number(localStorage.requisition)+1
	}
	else
		localStorage.requisition = 1

	if (	document.getElementById("Origem").value 		== "Origem" 		&&
			document.getElementById("Descricao").value 	== "Descricao" 	&&
			document.getElementById("Fabricante").value 	== "Fabricante" 	&&
			document.getElementById("Tombamento").value 	== "Tombamento" 	&&
			document.getElementById("Referencia").value 	== "Referencia" 	&&
			document.getElementById("N. de serie").value == "N. de serie"	&&
			document.getElementById("Peso").value 			== "Peso" 			&&
			document.getElementById("Estado").value 		== "Estado" 		&&
			document.getElementById("Valor").value 		== "Valor"				)
	{
		verificar_dados()
	}
	else
	{
		localstorage.dataAq 			= document.getElementById("dataAq").value
		localstorage.origem 			= document.getElementById("Origem").value
		localstorage.categoria 		= document.getElementById("categoria").value
		localstorage.grupo 			= (document.getElementById("categoria").value)?document.getElementById("grupo").value:"Não aplicável"
		localstorage.descricao 		= document.getElementById("Descricao").value
		localstorage.fabricante 	= document.getElementById("Fabricante").value
		localstorage.tombamento 	= document.getElementById("Tombamento").value
		localstorage.referencia 	= document.getElementById("Referencia").value
		localstorage.serialN 		= document.getElementById("N. de serie").value
		localstorage.peso 			= document.getElementById("Peso").value
		localstorage.estado 			= document.getElementById("Estado").value
		localstorage.valor 			= document.getElementById("Valor").value
		localstorage.imagem 			= document.getElementById("imagem").value
	}

}




//enviar ao banco de dados


