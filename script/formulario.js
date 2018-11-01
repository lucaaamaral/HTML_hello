var formulario = document.getElementsByClassName("form");//.onfocus;// = focused(this);
//document.getElementsByClass("form").onblur = focusout(this);
var i, k = formulario.length;
for (i=0; i<k-1; i++)
{
	if(formulario[i].type == "text")
	{
		formulario[i].onfocus = function onfocus(event) {focused(this)}
		formulario[i].onblur = function onblur(event) {focusout(this)}
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

function submit_db()
{
	for (i=0; i<k-1; i++)
	{
		if(formulario[i].type == "text" && formulario[i].id == formulario[i].value)
		{
			formulario[i].value = null;
		}
	}

	document.getElementById("formulario").reset();
//enviar ao banco de dados

}

