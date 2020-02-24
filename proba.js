var OnOff="Off"
var interval
var promjena2=false
var kvadratic

function loading()
{
    var interval2=setTimeout(function()
    {
        document.getElementById("loading2").style.transition="2s"
        document.getElementById("loading2").style.filter="opacity(1)"

    },5000);
    clearTimeout=interval2;
}

function crtanje(imeID,broj)
{
    if(broj==0)
    {
        document.getElementById("prvi"+imeID).style.display="block"
        document.getElementById("drugi"+imeID).style.display="block"
        document.getElementById("treci"+imeID).style.display="block"
        document.getElementById("cetvrti"+imeID).style.display="none";
        document.getElementById("peti"+imeID).style.display="block"
        document.getElementById("sesti"+imeID).style.display="block"
        document.getElementById("sedmi"+imeID).style.display="block"
    }
    else if(broj==1)
    {
        document.getElementById("prvi"+imeID).style.display="none";
        document.getElementById("drugi"+imeID).style.display="none";
        document.getElementById("treci"+imeID).style.display="block"
        document.getElementById("cetvrti"+imeID).style.display="none";
        document.getElementById("peti"+imeID).style.display="none";
        document.getElementById("sesti"+imeID).style.display="block"
        document.getElementById("sedmi"+imeID).style.display="none";
    }
    else if(broj==2)
    {
        document.getElementById("prvi"+imeID).style.display="block"
        document.getElementById("drugi"+imeID).style.display="none";
        document.getElementById("treci"+imeID).style.display="block"
        document.getElementById("cetvrti"+imeID).style.display="block"
        document.getElementById("peti"+imeID).style.display="block"
        document.getElementById("sesti"+imeID).style.display="none";
        document.getElementById("sedmi"+imeID).style.display="block"
    }
    else if(broj==3)
    {
        document.getElementById("prvi"+imeID).style.display="block"
        document.getElementById("drugi"+imeID).style.display="none";
        document.getElementById("treci"+imeID).style.display="block"
        document.getElementById("cetvrti"+imeID).style.display="block"
        document.getElementById("peti"+imeID).style.display="none";
        document.getElementById("sesti"+imeID).style.display="block"
        document.getElementById("sedmi"+imeID).style.display="block"
    }
    else if(broj==4)
    {
        document.getElementById("prvi"+imeID).style.display="none";
        document.getElementById("drugi"+imeID).style.display="block"
        document.getElementById("treci"+imeID).style.display="block"
        document.getElementById("cetvrti"+imeID).style.display="block"
        document.getElementById("peti"+imeID).style.display="none";
        document.getElementById("sesti"+imeID).style.display="block"
        document.getElementById("sedmi"+imeID).style.display="none";
    }
    else if(broj==5)
    {
        document.getElementById("prvi"+imeID).style.display="block"
        document.getElementById("drugi"+imeID).style.display="block"
        document.getElementById("treci"+imeID).style.display="none";
        document.getElementById("cetvrti"+imeID).style.display="block"
        document.getElementById("peti"+imeID).style.display="none";
        document.getElementById("sesti"+imeID).style.display="block"
        document.getElementById("sedmi"+imeID).style.display="block"
    }
    else if(broj==6)
    {
        document.getElementById("prvi"+imeID).style.display="block";
        document.getElementById("drugi"+imeID).style.display="block"
        document.getElementById("treci"+imeID).style.display="none"
        document.getElementById("cetvrti"+imeID).style.display="block"
        document.getElementById("peti"+imeID).style.display="block"
        document.getElementById("sesti"+imeID).style.display="block"
        document.getElementById("sedmi"+imeID).style.display="block"
    }
    else if(broj==7)
    {
        document.getElementById("prvi"+imeID).style.display="block"
        document.getElementById("drugi"+imeID).style.display="none";
        document.getElementById("treci"+imeID).style.display="block"
        document.getElementById("cetvrti"+imeID).style.display="none";
        document.getElementById("peti"+imeID).style.display="none";
        document.getElementById("sesti"+imeID).style.display="block"
        document.getElementById("sedmi"+imeID).style.display="none";
    }
    else if(broj==8)
    {
        document.getElementById("prvi"+imeID).style.display="block"
        document.getElementById("drugi"+imeID).style.display="block"
        document.getElementById("treci"+imeID).style.display="block"
        document.getElementById("cetvrti"+imeID).style.display="block"
        document.getElementById("peti"+imeID).style.display="block"
        document.getElementById("sesti"+imeID).style.display="block"
        document.getElementById("sedmi"+imeID).style.display="block"
    }
    else if(broj==9)
    {
        document.getElementById("prvi"+imeID).style.display="block"
        document.getElementById("drugi"+imeID).style.display="block"
        document.getElementById("treci"+imeID).style.display="block"
        document.getElementById("cetvrti"+imeID).style.display="block"
        document.getElementById("peti"+imeID).style.display="none";
        document.getElementById("sesti"+imeID).style.display="block"
        document.getElementById("sedmi"+imeID).style.display="block"
    }
}

function nule()
{
    document.getElementById("prvi7").style.display="block"
    document.getElementById("drugi7").style.display="block"
    document.getElementById("treci7").style.display="block"
    document.getElementById("cetvrti7").style.display="block";
    document.getElementById("peti7").style.display="block"
    document.getElementById("sesti7").style.display="block"
    document.getElementById("sedmi7").style.display="block"

    document.getElementById("prvi8").style.display="block"
    document.getElementById("drugi8").style.display="block"
    document.getElementById("treci8").style.display="block"
    document.getElementById("cetvrti8").style.display="block";
    document.getElementById("peti8").style.display="block"
    document.getElementById("sesti8").style.display="block"
    document.getElementById("sedmi8").style.display="block"
    document.getElementById('sedmi8').style.transform="rotate(0deg)"
    document.getElementById('sedmi8').style.top="193px"
    document.getElementById('sedmi8').style.left="19px"
    document.getElementById('treci8').style.transform="rotate(0deg)"
    document.getElementById('treci8').style.top="239px"
    document.getElementById('treci8').style.left="20px"
}

function crtanjeA()
{
    document.getElementById("prvi7").style.display="block"
    document.getElementById("drugi7").style.display="block"
    document.getElementById("treci7").style.display="block"
    document.getElementById("cetvrti7").style.display="block";
    document.getElementById("peti7").style.display="block"
    document.getElementById("sesti7").style.display="none"
    document.getElementById("sedmi7").style.display="block"
}

function crtanjeM()
{
    document.getElementById("prvi8").style.display="block"
    document.getElementById("drugi8").style.display="block"
    document.getElementById("treci8").style.display="block"
    document.getElementById("cetvrti8").style.display="block";
    document.getElementById("peti8").style.display="block"
    document.getElementById("sesti8").style.display="none"
    document.getElementById("sedmi8").style.display="block"
    document.getElementById('sedmi8').style.transform="rotate(135deg)"
    document.getElementById('sedmi8').style.top="206px"
    document.getElementById('sedmi8').style.left="32px"
    document.getElementById('treci8').style.transform="rotate(45deg)"
    document.getElementById('treci8').style.top="206px"
    document.getElementById('treci8').style.left="7px"
}

function crtanjeP()
{
    document.getElementById("prvi7").style.display="block"
    document.getElementById("drugi7").style.display="block"
    document.getElementById("treci7").style.display="block"
    document.getElementById("cetvrti7").style.display="block";
    document.getElementById("peti7").style.display="none"
    document.getElementById("sesti7").style.display="none"
    document.getElementById("sedmi7").style.display="block"
}

function iskljuciUkljuci()
{
    if(OnOff=="On")
    OnOff="Off"
    else if(OnOff=="Off")
    OnOff="On"

    if(OnOff=="On")
    {
        kvadratic=setInterval(function()
        {
            if(document.getElementById("kvadratic").style.backgroundColor=="red")
            document.getElementById("kvadratic").style.backgroundColor="black"
            else
            document.getElementById("kvadratic").style.backgroundColor="red"
        },500)
        document.getElementById("kocka").style.width="25px"
        odrSMS()
    }
    
    else if(OnOff=="Off")
    {
        document.getElementById("kocka").style.width="163px"
        document.getElementById("kocka").style.transition="2s"
        document.getElementById("sviDisplay-i").style.transition="1s"
        document.getElementById("sviDisplay-i").style.filter="brightness(0.5)"
        clearInterval(interval)
        clearInterval(kvadratic)
        document.getElementById('kvadratic').style.backgroundColor="red"
        crtanje("1",8)
        crtanje("2",8)
        crtanje("3",8)
        crtanje("4",8)
        crtanje("5",8)
        crtanje("6",8)
        nule();
        clearInterval(interval)
    }
    
}

function odrSMS()
{
    document.getElementById("sviDisplay-i").style.transition="1s"
    document.getElementById("sviDisplay-i").style.filter="brightness(1)"
    interval=setInterval(function()
    {
        var datum=new Date();
        var sekunde=datum.getSeconds();
        var minute=datum.getMinutes();
        var sati=datum.getHours();
        if(promjena2==true && sati>=12)
        {
            sati=sati-12;
        }
        
        var prvaSekunda=sekunde%10;
        sekunde=(sekunde-prvaSekunda)/10;
        var drugaSekunda=sekunde

        var prvaMinuta=minute%10
        minute=(minute-prvaMinuta)/10
        var drugaMinuta=minute;

        var prviSat=sati%10;
        sati=(sati-prviSat)/10
        var drugiSat=sati;
        
        crtanje("1",drugiSat)
        crtanje("2",prviSat)
        crtanje("3",drugaMinuta)
        crtanje("4",prvaMinuta)
        crtanje("5",drugaSekunda)
        crtanje("6",prvaSekunda)

        var noviDatum=new Date()
        var sat=noviDatum.getHours();
        if(sat>=12 && promjena2==true)
        {
            crtanjeP()
            crtanjeM()
        }
        else if(sat<12 && promjena2==true)
        {
            crtanjeA()
            crtanjeM()
        }

    },1000)
}

function promjena()
{
    if(OnOff=="On")
    {
        clearInterval(interval)
        if(promjena2==false)
        promjena2=true
        else
        {
            nule()
            promjena2=false;
        }
        
        if(document.getElementById('tekst').innerHTML=='<b>Format: 24</b>')
        document.getElementById('tekst').innerHTML='<b>Format: 12</b>'
        else
        document.getElementById('tekst').innerHTML='<b>Format: 24</b>'
        
        var noviDatum=new Date()
        var sat=noviDatum.getHours();
        if(sat>=12 && promjena2==true)
        {
            crtanjeP()
            crtanjeM()
        }
        else if(sat<12 && promjena2==true)
        {
            crtanjeA()
            crtanjeM()
        }
        
        odrSMS()
    }
    
}

function zaustavi()
{
    document.getElementById('prvi').style.animationPlayState="paused"
    document.getElementById('drugi').style.animationPlayState="paused"
}

function kreni()
{
    document.getElementById('prvi').style.animationPlayState="running"
    document.getElementById('drugi').style.animationPlayState="running"
}