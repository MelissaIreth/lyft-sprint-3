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