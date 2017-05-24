function validarTelefono(){
	var boton = document.getElementById('become-driver')

	boton.addEventListener("click", function(){
		var input = document.getElementById('phone').value;
		
		if( !(/^\d{9}$/.test(input)) ){
			alert("You must add your phone number");
		}else{
			alert("Ready to drive!");
		}
	});
}

validarTelefono();

//Tablero y auto

var tablero = [
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0]
]
/*

var cooX = document.getElementsByClassName("x")[0];
var cooY = document.getElementsByClassName("y")[0];
var divT = document.getElementById("tablero");

tablero[cooX][cooY]= "Auto"

var linea;
var cuadrito;

for(var i=0; i<tablero.length; i++){
	linea = document.createElement("div");
	linea.classList.add("linea")

	for(var j=0; j<tablero[i].length; j++){
		cuadrito.innerHTML = tablero[i][j];
		cuadrito.classList.add("cuadrito")
		linea.appendChild(cuadrito);
	}
	divT.appendChild(linea)
}

var start = document.getElementsByClassName("jugar")[0]
start.addEventListener("click", function(){

})


/*
(function cambiarBotonporCaja(){
    var AllPandas = Array.from(document.querySelectorAll(".pandas span"));
    var div = Array.from(document.querySelectorAll('.pandita div'))

    var start = document.getElementById("jugar");
    start.addEventListener("click", function(){
        AllPandas.forEach(function(e){
            e.parentElement.classList.remove("nada");
        });        
    });


    AllPandas.forEach(function(e){
        e.addEventListener("click", function(){
            console.log(e);
            this.parentElement.classList.add("nada");
        });
    });

})()
*/
var section = document.createElement("play")
var coordenadas = document.getElementById("coo")
var start = document.getElementById("jugar");
var divT = document.createElement("div")
divT.classList.add("el-tablero")
var cuadro = document.createElement("div")
cuadro.classList.add("cuadrito")
start.addEventListener("click", function(){

coordenadas.remove(start)
divT.add(start)
cuadrito.appendChild(divT)
divT.appendChild(section)
});

