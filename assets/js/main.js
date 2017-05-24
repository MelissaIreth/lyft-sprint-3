function validarTelefono(){
	var boton = document.getElementById('become-driver')

	boton.addEventListener("click", function(){
		var input = document.getElementById('phone').value;
		
		if(input != /^\d{9}$/){
			alert("You must add your phone number");
		}else{
			alert("Ready to drive!");
		}
	});
}

validarTelefono();

//Tablero y auto

var start = document.getElementsByClassName("jugar")[0]
start.addEventListener("click")

var tablero = [
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0]
]

var cooX = document.getElementsByClassName("x")[0];
var cooY = document.getElementsByClassName("y")[0];
var divT = document.getElementById("tablero");

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

