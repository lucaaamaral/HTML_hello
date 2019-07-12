//Verificação se usuário colocou informações requeridas
function verificar_dados()
{
    var formulario = document.getElementsByClassName("form");
    var i, k = formulario.length;
    var check
    check = false
    for (i=0; i<k; i++)
    {
        
        if (formulario[i].value == formulario[i].id)
        {
            formulario[i].style.color = "red"
            check = true
        }
        else
        {
            formulario[i].style.color = "black"
        }
    }
    return check
}

//Automatizar cor preta ou vermelha para campo em branco ou com parametros definidos pelo usuario
function focused(obj)
{
	if (obj.value == obj.id)
	{
		obj.value = '';
        obj.style.color = "black"
	}
}

function focusout(obj)
{
	if (obj.value == '')
	{
		obj.value = obj.id;
	}
}


//Ocultar ou mostrar o grupo caso determinada opção tenha sido escolhida
//Modificar para incluir mais parametros
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

//atribuir funçoes a eventos
var formulario = document.getElementsByClassName("form");

var i, k = formulario.length;
for (i=0; i<k; i++)
{
	if(formulario[i].type == "text")
	{
		formulario[i].onfocus = function onfocus(event) {focused(this)}
		formulario[i].onblur = function onblur(event) {focusout(this)}
		formulario[i].value = formulario[i].id
	}
	//else
	//AJUSTAR AQUI!!!
	//Inserir outros parametros e ampliar os tipos de parametros e determinar valores padrão para parametros não utilizados
}

//salvar informacoes no localStorage
function atribuir_dados()
{
    var req=0	//Informar que existem solicitacoes por enviar ao BD    
    if(localStorage.requisition)
    {
        localStorage.requisition = Number(localStorage.requisition) + 1
    }
    else localStorage.requisition = 1
        
    req = localStorage.requisition

    localStorage.setItem(req+"_selet" 			, document.getElementById("selet").value)	//sem gravar
    localStorage.setItem(req+"_descricao"		, document.getElementById("Descricao").value)
    localStorage.setItem(req+"_categoria"  	, document.getElementById("categoria").value)
    localStorage.setItem(req+"_grupo" 		   , (document.getElementById("categoria").value)=="C"?document.getElementById("grup").value:"-")
    localStorage.setItem(req+"_fabricante" 	, document.getElementById("Fabricante").value)
    localStorage.setItem(req+"_preco" 			, document.getElementById("Preco").value)	//sem gravar
    localStorage.setItem(req+"_valor" 	    	, document.getElementById("Valor").value)
    localStorage.setItem(req+"_peso" 	      , document.getElementById("Peso").value)
    localStorage.setItem(req+"_tombamento" 	, document.getElementById("Tombamento").value)
    localStorage.setItem(req+"_estado" 		, document.getElementById("Estado").value)
    localStorage.setItem(req+"_serialN" 	   , document.getElementById("N. de serie").value)
    localStorage.setItem(req+"_referencia" 	, document.getElementById("Referencia modelo").value)
    localStorage.setItem(req+"_origem"			, document.getElementById("Origem").value)
    localStorage.setItem(req+"_dataAq" 		, document.getElementById("dataAq").value)
    localStorage.setItem(req+"_obs"				, document.getElementById("Obs").value)
    //localstorage.imagem 			= document.getElementById("imagem").value
        
    window.location.href = "pendencias.html"
}



function local_save()
{
    //var check = verificar_dados()
    
	if (verificar_dados())
	{
		//Modifica a pagina para indicar erro
	}
	else
    {
    	//Salva em localStorage
        atribuir_dados()
        document.getElementById("ver").innerHTML = "atribuido"
    }
}
