//Preencher tabela com valores armazenados no localStorage
function update()
{
	if (window.localStorage.submitted==1)
	{
		var i;
		var k = window.localStorage.requisition;
		window.localStorage.removeItem("submitted");
		window.localStorage.removeItem("requisition");
		
		for(i=1; i<=k; i++)
		{
			window.localStorage.removeItem(i+"_selet");
		   window.localStorage.removeItem(i+"_descricao");
		   window.localStorage.removeItem(i+"_categoria");
		   window.localStorage.removeItem(i+"_grupo");
		   window.localStorage.removeItem(i+"_fabricante");
		   window.localStorage.removeItem(i+"_preco");
		   window.localStorage.removeItem(i+"_valor");
		   window.localStorage.removeItem(i+"_peso");
		   window.localStorage.removeItem(i+"_tombamento");
		   window.localStorage.removeItem(i+"_estado");
		   window.localStorage.removeItem(i+"_serialN");
		   window.localStorage.removeItem(i+"_referencia");
		   window.localStorage.removeItem(i+"_origem");
		   window.localStorage.removeItem(i+"_dataAq");
		   window.localStorage.removeItem(i+"_obs");
		}
	}
	else
	{
		 var tab = document.getElementById("tab")
		 var k = window.localStorage.requisition
		 var i
		 document.getElementById("numero").value = k;
		 document.getElementById("ver").value = k;
		 for (i=1; i<=k;i++)
		 {
		 //OBJETIVO: colocar tipo input dentro das celulas
		     var col = tab.insertRow(i)	//Gerar linha da tabela
		     
				//Gerar celulas individuais(colunas)
			  var cell0 = col.insertCell(0);	
		     var cell1 = col.insertCell(1);
		     var cell2 = col.insertCell(2); 
		     var cell3 = col.insertCell(3); 
		     var cell4 = col.insertCell(4); 
		     var cell5 = col.insertCell(5); 
		     var cell6 = col.insertCell(6);
		     var cell7 = col.insertCell(7); 
		     var cell8 = col.insertCell(8); 
		     var cell9 = col.insertCell(9); 
		     var cell10 = col.insertCell(10); 
		     var cell11 = col.insertCell(11); 
		     var cell12 = col.insertCell(12); 
		     var cell13 = col.insertCell(13);
		     var cell14 = col.insertCell(14);
		     var cell15 = col.insertCell(15);

				//gerar 'inputs'
		     var inp1 = document.createElement("input");
		     var inp2 = document.createElement("input");
		     var inp3 = document.createElement("input");
		     var inp4 = document.createElement("input");
		     var inp5 = document.createElement("input");
		     var inp6 = document.createElement("input");
		     var inp7 = document.createElement("input");
		     var inp8 = document.createElement("input");
		     var inp9 = document.createElement("input");
		     var inp10 = document.createElement("input");
		     var inp11 = document.createElement("input");
		     var inp12 = document.createElement("input");
		     var inp13 = document.createElement("input");
		     var inp14 = document.createElement("input");
		     var inp15 = document.createElement("input");
		     
		     
		     //Atributo 'name'
		     inp1.name=i+"_"+0;
		     inp2.name=i+"_"+1;
		     inp3.name=i+"_"+2;
		     inp4.name=i+"_"+3;
		     inp5.name=i+"_"+4;
		     inp6.name=i+"_"+5;
		     inp7.name=i+"_"+6;
		     inp8.name=i+"_"+7;
		     inp9.name=i+"_"+8;
		     inp10.name=i+"_"+9;
		     inp11.name=i+"_"+10;
		     inp12.name=i+"_"+11;
		     inp13.name=i+"_"+12;
		     inp14.name=i+"_"+13;
		     inp15.name=i+"_"+14;
		     
		     //Atributo value == o que sera lido por POST
		     inp1.value = window.localStorage.getItem(i+"_selet");
		     inp2.value = window.localStorage.getItem(i+"_descricao");
		     inp3.value = window.localStorage.getItem(i+"_categoria");
		     inp4.value = window.localStorage.getItem(i+"_grupo");
		     inp5.value = window.localStorage.getItem(i+"_fabricante");
		     inp6.value = window.localStorage.getItem(i+"_preco");
		     inp7.value = window.localStorage.getItem(i+"_valor");
		     inp8.value = window.localStorage.getItem(i+"_peso");
		     inp9.value = window.localStorage.getItem(i+"_tombamento");
		     inp10.value = window.localStorage.getItem(i+"_estado");
		     inp11.value = window.localStorage.getItem(i+"_serialN");
		     inp12.value = window.localStorage.getItem(i+"_referencia");
		     inp13.value = window.localStorage.getItem(i+"_origem");
		     inp14.value = window.localStorage.getItem(i+"_dataAq");
		     inp15.value = window.localStorage.getItem(i+"_obs");
		     
		     //Colocar hidden
		     inp1.hidden = true;
		     inp2.hidden = true;
		     inp3.hidden = true;
		     inp4.hidden = true;
		     inp5.hidden = true;
		     inp6.hidden = true;
		     inp7.hidden = true;
		     inp8.hidden = true;
		     inp9.hidden = true;
		     inp10.hidden = true;
		     inp11.hidden = true;
		     inp12.hidden = true;
		     inp13.hidden = true;
		     inp14.hidden = true;
		     inp15.hidden = true;

		     //Preencher o que será visivel
		     cell0.innerHTML = window.localStorage.getItem(i+"_selet");
		     cell1.innerHTML = window.localStorage.getItem(i+"_descricao")
		     cell2.innerHTML = window.localStorage.getItem(i+"_categoria")
		     cell3.innerHTML = window.localStorage.getItem(i+"_grupo")
		     cell4.innerHTML = window.localStorage.getItem(i+"_fabricante")
		     cell5.innerHTML = window.localStorage.getItem(i+"_preco")
		     cell6.innerHTML = window.localStorage.getItem(i+"_valor")
		     cell7.innerHTML = window.localStorage.getItem(i+"_peso")
		     cell8.innerHTML = window.localStorage.getItem(i+"_tombamento")
		     cell9.innerHTML = window.localStorage.getItem(i+"_estado")
		     cell10.innerHTML = window.localStorage.getItem(i+"_serialN")
		     cell11.innerHTML = window.localStorage.getItem(i+"_referencia")
		     cell12.innerHTML = window.localStorage.getItem(i+"_origem")
		     cell13.innerHTML = window.localStorage.getItem(i+"_dataAq")
		     cell14.innerHTML = window.localStorage.getItem(i+"_obs")
		     cell15.innerHTML = "oi"
		      
		     //Colocar o input no html de forma ordenada [NECESSARIO] [IMPORTANTE: colocar apos o preenchimento (anterior)]
		     cell0.appendChild(inp1);
		     cell1.appendChild(inp2);
		     cell2.appendChild(inp3);
		     cell3.appendChild(inp4);
		     cell4.appendChild(inp5);
		     cell5.appendChild(inp6);
		     cell6.appendChild(inp7);
		     cell7.appendChild(inp8);
		     cell8.appendChild(inp9);
		     cell9.appendChild(inp10);
		     cell10.appendChild(inp11);
		     cell11.appendChild(inp12);
		     cell12.appendChild(inp13);
		     cell13.appendChild(inp14);
		     cell14.appendChild(inp15);
		     
		     //Acrescentar mais dados depois
		 }
	}
}


function enviar_bd()
{
	document.getElementById("ver").innerHTML = document.getElementsByName("2_1")[0].value;
	
	
}
function envia()
{
	alert("Enviar todos os itens de uma vez. (fazer automatico quando online!!)");
	window.localStorage.submitted=1;
		
	return true;
}
