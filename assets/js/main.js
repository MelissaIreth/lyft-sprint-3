function validarTelefono(){
	var boton = document.getElementById('become-driver')

	boton.addEventListener("click", function(){
		var input = document.getElementById('phone').value;
		
		if( !(/^\d{9}$/.test(input)) ){
			alert("You must add your phone number, 9 digits");
		}else{
			alert("Ready to drive!");
			document.getElementById('phone').value = "";
		}
	});
}

validarTelefono();


//


function cambiar(){
var tablero = [
["","","","","","","","","",""],
["","","","","","","","","",""],
["","","","","","","","","",""],
["","","","","","","","","",""],
["","","","","","","","","",""],
["","","","","","","","","",""]
];

var section = document.getElementById("caja-coo-p")
var coordenadas = document.getElementById("coo")
var start = document.getElementById("jugar");
var divT = document.createElement("div");
divT.classList.add("el-tablero");
var cuadro = document.createElement("div");
cuadro.classList.add("cuadrito");

start.addEventListener("click", function(){

coordenadas.remove(start);

});

tablero.appendChild(cuadro);
cuadro.appendChild(divT);
divT.appendChild(section);
}
cambiar();

/*Lo que quise hacer aqui: llamar mi div que contenia los input de las coordenadas,
llamar a mi div de las coordenadas y el boton de start,
crear un nuevo div que sería dnd se ubicaria la nueva caja y darle clase
y crear otro div dnd se dibuja el cuadro.
Al hacer click al boton start, borrar el div de las coordenadas y agregar el div del tablero.
puse la var tablero como hijo del cuadrito y el cuadrito como hijo del nuevo div 
y ese div ponerlo como hijo del div que antes contenia las coordenadas para que esa sea su ubicación.
*/