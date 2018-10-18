var formulario = document.getElementsByClassName("form");
var i, k = formulario.length;
for (i=0; i<k-1; i++)
{
	if(formulario[i].type == "text")
	{
		formulario[i].onfocus = function onfocus(event) {focused(this)}
		formulario[i].onblur = function onblur(event) {focusout(this)}
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
