
function fon ()
{

  document.getElementById('cara').innerHTML = Date();

return;
}

function fout ()
{

  document.getElementById('cara').innerHTML = '<>';

return;
}

function create(i)
{
    i++;
    var a = document.createElement("BUTTON");
    var b = document.createTextNode("Botão " + (i));
    var br = document.createElement("DIV");
    a.appendChild(b);
    document.body.appendChild(br);
    br.appendChild(a);
    a.setAttribute("type", "button");
    a.setAttribute("onclick", "create("+i+")");


return;
}
