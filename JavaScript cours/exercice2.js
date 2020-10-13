function convert(){
    var radio = document.getElementsByClassName("radio")
    var unit = document.getElementById("value").value
    var chiffre = parseInt(unit)
    for (var i=0; i<radio.length; i++)  {
        if (radio[i].checked)  {
            value = radio[i].value 
        }
    }
    if (value == "Celcius") {
        var Degres = (chiffre - 32) / 1.8
        document.getElementById("value").value = Degres
        console.log(Degres)
    } else {
        var Farenheit = (chiffre * 9 / 5 ) + 32
        document.getElementById("value").value = Farenheit
        console.log(Farenheit)
    }
    
}