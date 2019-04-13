
/**document.write("Uma Nova Tecnologia esta por Vim!");*/

function on() {
   document.getElementById("lamp").src="27.jpg";

}

function off(){
	document.getElementById("lamp").src="p1.jpg";
}

function quebrar(){
	document.getElementById("lamp").src="p2.jpg";
}

function quebrei(){
	document.getElementById("lamp").src="31.png";
}


function blink(){
	var intervalo = 0;
	var contador = 0;
	while(contador < 10){
		intervalo += 1500;
		setTimeout("document.getElementById('lamp').src='p1.jpg';",intervalo);
		intervalo +=1500;
		setTimeout("document.getElementById('lamp').src='p2.jpg';",intervalo);
		contador++;

	}
}

/*Chat box**/
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  }