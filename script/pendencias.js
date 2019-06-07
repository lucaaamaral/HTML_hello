update()

function update()
{
    document.getElementById("ver").innerHTML = "lalala"
    var tab = document.getElementById("tab")
    var k = window.localStorage.requisition
    var i
    
    
    for (i=1; i<=k;i++)
    {
        var col = tab.insertRow(i)
        
        //document.getElementById("ver").innerHTML = "coluna"
        
        var cell0 = col.insertCell(0)
                
        //document.getElementById("ver").innerHTML = window.localStorage.getItem(1+"_fabricante")
        
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
    
        
        cell0.innerHTML = window.localStorage.getItem(i+"_dataAq")
        cell1.innerHTML = window.localStorage.getItem(i+"_origem")
        cell2.innerHTML = window.localStorage.getItem(i+"_categoria")
        cell3.innerHTML = window.localStorage.getItem(i+"_grupo")
        cell4.innerHTML = window.localStorage.getItem(i+"_descricao")
        cell5.innerHTML = window.localStorage.getItem(i+"_fabricante")
        cell6.innerHTML = window.localStorage.getItem(i+"_tombamento")
        cell7.innerHTML = window.localStorage.getItem(i+"_referencia")
        cell8.innerHTML = window.localStorage.getItem(i+"_serialN")
        cell9.innerHTML = window.localStorage.getItem(i+"_peso")
        cell10.innerHTML = window.localStorage.getItem(i+"_estado")
        cell11.innerHTML = window.localStorage.getItem(i+"_valor")
        cell12.innerHTML = "oi"
    }
}
