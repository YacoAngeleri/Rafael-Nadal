let azar = 1;
let azar1 = 1;

    //Funcion para galeria de frases de rafa y novak para poder ir pasando las fotos
function fotos1(){
	    azar1++
        document.getElementById('foto2').src = '../imagenes/rafaynovak'+ azar1+ '.jpg';
        console.log ('Esta es la foto de rafa y novak numero: ' + azar1);
        if (azar1 >= 8) {
        	azar1 = 0;
        }
    }
    //Funcion para galeria de frases de rafa y roger para poder ir pasando las fotos
function fotos2(){
	    azar1++
        document.getElementById('foto3').src = '../imagenes/rafayroger'+ azar1+ '.jpg';
        console.log ('Esta es la foto de rafa y roger numero: ' + azar1);
        if (azar1 >= 8) {
        	azar1 = 0;
        }
    }