function nula()
{
    document.getElementById("prvi5").style.display="block"
    document.getElementById("druga5").style.display="block"
    document.getElementById("treci5").style.display="block"
    document.getElementById("cetvrti5").style.display="none";
    document.getElementById("peti5").style.display="block"
    document.getElementById("sesti5").style.display="block"
    document.getElementById("sedmi5").style.display="block"
}

function jedan()
{
    document.getElementById("prvi5").style.display="none";
    document.getElementById("drugi5").style.display="none";
    document.getElementById("treci5").style.display="block"
    document.getElementById("cetvrti5").style.display="none";
    document.getElementById("peti5").style.display="none";
    document.getElementById("sesti5").style.display="block"
    document.getElementById("sedmi5").style.display="none";
}

function dva()
{
    document.getElementById("prvi5").style.display="block"
    document.getElementById("drugi5").style.display="none";
    document.getElementById("treci5").style.display="block"
    document.getElementById("cetvrti5").style.display="block"
    document.getElementById("peti5").style.display="block"
    document.getElementById("sesti5").style.display="none";
    document.getElementById("sedmi5").style.display="block"
}

function tri()
{
    document.getElementById("prvi5").style.display="block"
    document.getElementById("drugi5").style.display="none";
    document.getElementById("treci5").style.display="block"
    document.getElementById("cetvrti5").style.display="block"
    document.getElementById("peti5").style.display="none";
    document.getElementById("sesti5").style.display="block"
    document.getElementById("sedmi5").style.display="block"
}

function cetiri()
{
    document.getElementById("prvi5").style.display="none";
    document.getElementById("drugi5").style.display="block"
    document.getElementById("treci5").style.display="block"
    document.getElementById("cetvrti5").style.display="block"
    document.getElementById("peti5").style.display="none";
    document.getElementById("sesti5").style.display="block"
    document.getElementById("sedmi5").style.display="none";
}

function pet()
{
    document.getElementById("prvi5").style.display="block"
    document.getElementById("drugi5").style.display="block"
    document.getElementById("treci5").style.display="none";
    document.getElementById("cetvrti5").style.display="block"
    document.getElementById("peti5").style.display="none";
    document.getElementById("sesti5").style.display="block"
    document.getElementById("sedmi5").style.display="block"
}

setInterval(function()
{
    var datum=new Date();
    var sekunde=datum.getSeconds();
    
    var prvaSekunda=sekunde%10;
    if(sekunde==0)
    {
        var drugaSekunda=sekunde;
    }
    else
    {
        sekunde=(sekunde-prvaSekunda)/10;
        var drugaSekunda=sekunde;
    }
    
    
    console.log(drugaSekunda);
    

    if(drugaSekunda==0)
    nula()
    else if(drugaSekunda==1)
    jedan()
    else if(drugaSekunda==2)
    dva()
    else if(drugaSekunda==3)
    tri()
    else if(drugaSekunda==4)
    cetiri()
    else if(drugaSekunda==5)
    pet()

},1000)