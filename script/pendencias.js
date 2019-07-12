//Preencher tabela com valores armazenados no localStorage
function update()
{
    var tab = document.getElementById("tab")
    var k = window.localStorage.requisition
    var i
    document.getElementById("numero").innerHTML = k;
    
    for (i=1; i<=k;i++)
    {//comentarios desatualizados -- pressa, já são 21h de sexta feira
    //colocar tipo input dentro das celulas
        var col = tab.insertRow(i)
        var cell0 = col.insertCell(0);	//data aquisicao
        var cell1 = col.insertCell(1); //origem
        var cell2 = col.insertCell(2); //cetegoria
        var cell3 = col.insertCell(3); //grupo
        var cell4 = col.insertCell(4); //descricao
        var cell5 = col.insertCell(5); //fabricante
        var cell6 = col.insertCell(6); //tombamento
        var cell7 = col.insertCell(7); //referencia
        var cell8 = col.insertCell(8); //no serie
        var cell9 = col.insertCell(9); //peso
        var cell10 = col.insertCell(10); //estado
        var cell11 = col.insertCell(11); //valor
        var cell12 = col.insertCell(12); //imagem
        var cell13 = col.insertCell(13);
        var cell14 = col.insertCell(14);
        var cell15 = col.insertCell(15);
        
        
        cell0.id = i+"_"+0
        cell1.id = i+"_"+1
        cell2.id = i+"_"+2
        cell3.id = i+"_"+3
        cell4.id = i+"_"+4
        cell5.id = i+"_"+5
        cell6.id = i+"_"+6
        cell7.id = i+"_"+7
        cell8.id = i+"_"+8
        cell9.id = i+"_"+9
        cell10.id = i+"_"+10
        cell11.id = i+"_"+11
        cell12.id = i+"_"+12
        cell13.id = i+"_"+13
        cell14.id = i+"_"+14
        cell15.id = i+"_"+15
        
        cell0.setAttribute ("name", i+"_"+0)
        cell1.setAttribute ("name", i+"_"+1)
        cell2.setAttribute ("name", i+"_"+2)
        cell3.setAttribute ("name", i+"_"+3)
        cell4.setAttribute ("name", i+"_"+4)
        cell5.setAttribute ("name", i+"_"+5)
        cell6.setAttribute ("name", i+"_"+6)
        cell7.setAttribute ("name", i+"_"+7)
        cell8.setAttribute ("name", i+"_"+8)
        cell9.setAttribute ("name", i+"_"+9)
        cell10.setAttribute ("name", i+"_"+10)
        cell11.setAttribute ("name", i+"_"+11)
        cell12.setAttribute ("name", i+"_"+12)
        cell13.setAttribute ("name", i+"_"+13)
        cell14.setAttribute ("name", i+"_"+14)
        cell15.setAttribute ("name", i+"_"+15)
        
        cell0.innerHTML = window.localStorage.getItem(i+"_selet")
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
        
        
        
        //Acrescentar mais dados depois
    }
}


function enviar_bd()
{
	document.getElementsByName("1_12")[0].innerHTML = "diferente";
	
	
}
