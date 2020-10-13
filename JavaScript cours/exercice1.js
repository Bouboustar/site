function date()	{
    var nom = document.getElementById('nom').value;
    var cv = document.getElementById('civilite').value;
    var ladate = new Date();
    var h = ladate.getHours();
    var s = "";
    if (h < 17) {
        s = "Bonjour ";
    } else {
        s = "Bonsoir "; 
    }
    var msg = s+cv+' '+nom+', '+'il est '+ladate.getHours()+':'+ladate.getMinutes()+':'+ladate.getSeconds()+'h';
    document.getElementById("formulaire").innerHTML = msg;
}
