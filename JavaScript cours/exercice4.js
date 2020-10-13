function reset(){
    document.getElementById("euro").value = "0";
    document.getElementById("dollar").value = "0";
    document.getElementById("yen").value = "0";
}

function convertisseur(){
    const doltoeur = 0.85;
    const dolltoyen = 105.66;
    const eurtoyen = 123.97;
    


    if (document.getElementById("euro").value != "0"){
        var euro = document.getElementById("euro").value;
        var euros = parseInt(euro);
        var dollars = euros / doltoeur;
        var yens = euros * eurtoyen;
        document.getElementById("dollar").value = dollars;
        document.getElementById("yen").value = yens;
        setTimeout(() => {
            reset();
        },15000)
    } else if (document.getElementById("dollar").value != "0") {
        var dollar = document.getElementById("dollar").value;
        var dollars = parseInt(dollar);
        var euros = dollars / doltoeur;
        var yens = dollars * dolltoyen;
        document.getElementById("euro").value = euros;
        document.getElementById("yen").value = yens;
        setTimeout(() => {
            reset();
        },15000)
    } else if (document.getElementById("yen").value != "0"){
        var yen = document.getElementById("yen").value;
        yens = parseInt(yen);
        var euros = yens / eurtoyen;
        var dollars = yens / dolltoyen;
        document.getElementById("euro").value = euros;
        document.getElementById("dollar").value = dollars;
        setTimeout(() => {
            reset();
        },15000)
    }
}