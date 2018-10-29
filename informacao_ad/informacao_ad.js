var hist = document.getElementById("historico_text");
hist.onblur =  function(){on_blur()}	
hist.onfocus = function(){on_focus()}


function on_blur()
{
	if (hist.value == '')
	{
		hist.value = "Insira informações adicionais sobre o equipamento";
	}	
}

function on_focus()
{
	if (hist.value == "Insira informações adicionais sobre o equipamento")
	{
		hist.value = '';
	}
}

