function nula()
{
    document.getElementById("prvi6").style.display="block"
    document.getElementById("drugi6").style.display="block"
    document.getElementById("treci6").style.display="block"
    document.getElementById("cetvrti6").style.display="none";
    document.getElementById("peti6").style.display="block"
    document.getElementById("sesti6").style.display="block"
    document.getElementById("sedmi6").style.display="block"
}

function jedan()
{
    document.getElementById("prvi6").style.display="none";
    document.getElementById("drugi6").style.display="none";
    document.getElementById("treci6").style.display="block"
    document.getElementById("cetvrti6").style.display="none";
    document.getElementById("peti6").style.display="none";
    document.getElementById("sesti6").style.display="block"
    document.getElementById("sedmi6").style.display="none";
}

function dva()
{
    document.getElementById("prvi6").style.display="block"
    document.getElementById("drugi6").style.display="none";
    document.getElementById("treci6").style.display="block"
    document.getElementById("cetvrti6").style.display="block"
    document.getElementById("peti6").style.display="block"
    document.getElementById("sesti6").style.display="none";
    document.getElementById("sedmi6").style.display="block"
}

function tri()
{
    document.getElementById("prvi6").style.display="block"
    document.getElementById("drugi6").style.display="none";
    document.getElementById("treci6").style.display="block"
    document.getElementById("cetvrti6").style.display="block"
    document.getElementById("peti6").style.display="none";
    document.getElementById("sesti6").style.display="block"
    document.getElementById("sedmi6").style.display="block"
}

function cetiri()
{
    document.getElementById("prvi6").style.display="none";
    document.getElementById("drugi6").style.display="block"
    document.getElementById("treci6").style.display="block"
    document.getElementById("cetvrti6").style.display="block"
    document.getElementById("peti6").style.display="none";
    document.getElementById("sesti6").style.display="block"
    document.getElementById("sedmi6").style.display="none";
}

function pet()
{
    document.getElementById("prvi6").style.display="block"
    document.getElementById("drugi6").style.display="block"
    document.getElementById("treci6").style.display="none";
    document.getElementById("cetvrti6").style.display="block"
    document.getElementById("peti6").style.display="none";
    document.getElementById("sesti6").style.display="block"
    document.getElementById("sedmi6").style.display="block"
}

function sest()
{
    document.getElementById("prvi6").style.display="block";
    document.getElementById("drugi6").style.display="block"
    document.getElementById("treci6").style.display="none"
    document.getElementById("cetvrti6").style.display="block"
    document.getElementById("peti6").style.display="block"
    document.getElementById("sesti6").style.display="block"
    document.getElementById("sedmi6").style.display="block"
}

function sedam()
{
    document.getElementById("prvi6").style.display="block"
    document.getElementById("drugi6").style.display="none";
    document.getElementById("treci6").style.display="block"
    document.getElementById("cetvrti6").style.display="none";
    document.getElementById("peti6").style.display="none";
    document.getElementById("sesti6").style.display="block"
    document.getElementById("sedmi6").style.display="none";
}

function osam()
{
    document.getElementById("prvi6").style.display="block"
    document.getElementById("drugi6").style.display="block"
    document.getElementById("treci6").style.display="block"
    document.getElementById("cetvrti6").style.display="block"
    document.getElementById("peti6").style.display="block"
    document.getElementById("sesti6").style.display="block"
    document.getElementById("sedmi6").style.display="block"
}

function devet()
{
    document.getElementById("prvi6").style.display="block"
    document.getElementById("drugi6").style.display="block"
    document.getElementById("treci6").style.display="block"
    document.getElementById("cetvrti6").style.display="block"
    document.getElementById("peti6").style.display="none";
    document.getElementById("sesti6").style.display="block"
    document.getElementById("sedmi6").style.display="block"
}

setInterval(function()
{
    var datum=new Date();
    var sekunde=datum.getSeconds();
    
    var prvaSekunda=sekunde%10;
    sekunde=(sekunde-prvaSekunda)/10;
    var drugaSekunda=sekunde
    
    if(prvaSekunda==0)
    nula()
    else if(prvaSekunda==1)
    jedan()
    else if(prvaSekunda==2)
    dva()
    else if(prvaSekunda==3)
    tri()
    else if(prvaSekunda==4)
    cetiri()
    else if(prvaSekunda==5)
    pet()
    else if(prvaSekunda==6)
    sest()
    else if(prvaSekunda==7)
    sedam()
    else if(prvaSekunda==8)
    osam()
    else if(prvaSekunda==9)
    devet()
/*
    if(sekunde==0)
    nula()
    else if(sekunde==1)
    jedan()
    else if(sekunde==2)
    dva()
    else if(sekunde==2)
    tri()
    else if(sekunde==2)
    cetiri()
    else if(sekunde==2)
    pet()
    else if(sekunde==2)
    sest()
    else if(sekunde==2)
    sedam()
    else if(sekunde==2)
    osam()
    else if(sekunde==2)
    devet()
*/
},1000)