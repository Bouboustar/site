function verifpren(){
    var pren = document.getElementById("prenom").value
    var nom = document.getElementById("nom").value
    var valnom = document.getElementById("nom").validity.patternMismatch;
	var valpre = document.getElementById("prenom").validity.patternMismatch; 


	if (valnom ===true || nom.length===0 || valpre === true || pren.length === 0){
    	document.getElementById("val1").innerHTML= "X";
    	document.getElementById("val1").style.color= "#ff1515";
        document.getElementById("val2").innerHTML= "X";
    	document.getElementById("val2").style.color= "#ff1515";
    }else if (valnom === false && valpre === false ){
    	document.getElementById("val1").innerHTML= "✓“";
    	document.getElementById("val1").style.color= "#6eff33";
       	document.getElementById("val2").innerHTML= "✓“";
    	document.getElementById("val2").style.color= "#6eff33";
    }	
     	
}

function veriftel(){

    var tel = document.getElementById("tel").value
	var valtel = document.getElementById("tel").validity.patternMismatch; 


	if (valtel ===true || tel.length===0){
    	document.getElementById("val4").innerHTML= "X";
    	document.getElementById("val4").style.color= "#ff1515";
    }else if (valtel === false){
    	document.getElementById("val4").innerHTML= "✓“";
    	document.getElementById("val4").style.color= "#6eff33";
    }
}


function verifiemail(){
    //recup les mails 
    var mail1 = document.getElementById("mail").value
    var mail2 = document.getElementById("cmail").value
    //verif les mails 
    if (mail1 != mail2) {
        alert("Vos emails ne correspondent pas")
        document.getElementById("cmail").value = ""
        document.getElementById("val3").innerHTML= "X";
        document.getElementById("val3").style.color= "#ff1515";
        document.getElementById("val3").innerHTML= "X";
        document.getElementById("val3").style.color= "#ff1515";

    } else {
        document.getElementById("val3").innerHTML= "✓";
        document.getElementById("val3").style.color= "#6eff33";
        document.getElementById("val3").innerHTML= "✓";
        document.getElementById("val3").style.color= "#6eff33";
    }
}
function verifiedate(){
    j = new Array();
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
        document.getElementById("val5").innerHTML= "X";
        document.getElementById("val5").style.color= "#ff1515";
        document.getElementById("val5").innerHTML= "X";
        document.getElementById("val5").style.color= "#ff1515";
    } else {

        var jours = ((temps2 - temps1) / 86400000) - 1
        document.getElementById("nuits").value = jours
        document.getElementById("val5").innerHTML= "✓";
        document.getElementById("val5").style.color= "#6eff33";
        document.getElementById("val5").innerHTML= "✓";
        document.getElementById("val5").style.color= "#6eff33";
    }
}
function verifiechambre(){
    var radio = document.getElementsByClassName("radio")
    var typechambre = document.getElementById("selecchambre").value
    for (var i=0; i < radio.length; i++) {
    	if (radio[i].checked){
            var chambre = radio[i].value;	
        }
    }
    console.log(chambre)
    console.log(typechambre)
    if (chambre == "un" && typechambre == "simple"){

    } else if (chambre == "deux" && typechambre == "double"){

    } else if (chambre == "trois" && typechambre == "appart"){

    } else if (chambre == "quatre" && typechambre == "duplex"){
        
    } else {
        alert("Vous avez choisi une suite de type" + " " + typechambre + " " + "pour " + chambre + " " + "personnes")
    }

}



function colorchambre(){
    var typechambre = document.getElementById("selecchambre").value

    if (typechambre === "simple"){
    	document.getElementById("un").disabled = false
        document.getElementById("deux").disabled = true 
        document.getElementById("trois").disabled = true 
        document.getElementById("quatre").disabled = true 
        document.getElementById("deux").style.color = "gray"
        document.getElementById("trois").style.color = "gray"
        document.getElementById("quatre").style.color = "gray"

    } else if (typechambre === "double") {
        document.getElementById("un").disabled = true 
    	document.getElementById("deux").disabled = false
        document.getElementById("trois").disabled = true 
        document.getElementById("quatre").disabled = true 
        document.getElementById("un").style.color = "grey"
        document.getElementById("trois").style.color = "grey"
        document.getElementById("quatre").style.color = "grey"
    } else if (typechambre === "appart"){
        document.getElementById("deux").disabled = true
        document.getElementById("un").disabled = true
        document.getElementById("trois").disabled = false 
        document.getElementById("quatre").disabled = true
        document.getElementById("deux").style.color = "grey"
        document.getElementById("un").style.color = "grey"
        document.getElementById("quatre").style.color = "grey"
    } else {
        document.getElementById("un").disabled = true
        document.getElementById("deux").disabled = true
        document.getElementById("trois").disabled = true
    	document.getElementById("quatre").disabled = false
        document.getElementById("un").style.color = "grey"
        document.getElementById("deux").style.color = "grey"
        document.getElementById("trois").style.color = "grey"
    }
}
function check(){
	var ch = document.getElementsByClassName("checkb");
	var options=new Array();
	
	for (var i=0; i<ch.length; i++)  {
    	if (ch[i].checked){
        	options.push(ch[i].value);
        
        }
    
    }
	return options
}

function calcul(){
    var nb_nuits = document.getElementById("nuits").value
    var nb_petitdej = document.getElementById("dejeuners").value
    var type_chambre = document.getElementById("selecchambre").value


    if (nb_nuits != " "){
        var val_nuit = 60
        var val_nuit = parseInt(val_nuit)
    }

    if (type_chambre === "simple") {
        var prix_nuits = val_nuit * nb_nuits
        var prix_nuits = parseInt(prix_nuits)
    } else if (type_chambre === "double") {
        var prix_nuits = ( val_nuit * nb_nuits ) * 0.2
        var prix_nuits = parseInt(prix_nuits)
    } else if (type_chambre === "appart") {
        var prix_nuits = ( val_nuit * nb_nuits ) * 0.3
        var prix_nuits = parseInt(prix_nuits)
    } else if (type_chambre === "duplex") {
        var prix_nuits = ( val_nuit * nb_nuits ) * 0.4
        var prix_nuits = parseInt(prix_nuits)
    }if(check().length!=0){
    	var j =""
        j=j+check().length*20;
    	j = parseInt(j)
    } else if(check().length ===0) {
    	j = 0
    }
    
    console.log(prix_nuits)

    var prix_tot = prix_nuits + (nb_petitdej * 10) + j
    document.getElementById("prix").innerHTML = prix_tot + "eur"
}