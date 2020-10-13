function verifiedate(){
    //recup des infos 
    var arrivee = document.getElementById("arrivee").value
    var depart = document.getElementById("depart").value
    var date1 = new Date(arrivee);
    var date2 = new Date(depart);
    var temps1 = date1.getTime();
    var temps2 = date2.getTime();
    //Passer le temps sur la forme int 
    var temps1 = parseInt(temps1)
    var temps2 = parseInt(temps2)
    //verification + calcul
    if (temps1 >= temps2){
        alert("Vous pouvez pas partir comme cela")
    } else {
        alert("L'écart entre "+ temps1 +" et "+temps2+" est de " +(temps2 - temps1))
        var jours = ((temps2 - temps1) / 86400000) - 1
        document.getElementById("nuits").value = jours
    }
}