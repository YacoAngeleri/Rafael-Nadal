//inicializacion de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let temporizador = false;
let timer = 30;
let timerInicial = 30;
let tiempoRegresivoId = null;
let movimientos = 0;
let aciertos = 0;

//apuntando a documento HTML
let mostrarMovimientos = document.getElementById('movimientos'); // !!
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t.restante');
console.log(mostrarMovimientos)




let imagenes = ['../imagenes/rafa1.jpg', '../imagenes/rafa1.jpg', '../imagenes/rafa2.jpg', '../imagenes/rafa2.jpg', '../imagenes/rafa3.jpg', '../imagenes/rafa3.jpg', '../imagenes/rafa4.jpg', '../imagenes/rafa4.jpg', '../imagenes/rafa5.jpg', '../imagenes/rafa5.jpg', '../imagenes/rafa6.jpg', '../imagenes/rafa6.jpg', '../imagenes/rafa7.jpg', '../imagenes/rafa7.jpg', '../imagenes/rafa8.jpg', '../imagenes/rafa8.jpg'];

imagenes = imagenes.sort(() => (Math.random() - 0.5));

console.log(imagenes);


//funciones
function contarTiempo() {
    tiempoRegresivoId = setInterval(() => {
        timer--;
        mostrarTiempo.innerHTML = 'Tiempo: ' + timer + '<br> segundos';
        if (timer == 0) {
            clearInterval(tiempoRegresivoId);
            bloquearTarjetas();

        }
    }, 1000);
}

function bloquearTarjetas() {
    for (let i = 0; i <= 15; i++) {
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = imagenes[i];
        tarjetaBloqueada.disabled = true;
    }
}


//funcion principal
function destapar(id) {

    if (temporizador == false) {
        contarTiempo();
        temporizador = true;
    }
    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);

    

    if (tarjetasDestapadas == 1) {
       

        tarjeta1 = document.getElementById(id);
        primerResultado = imagenes[id];
        tarjeta1.src = primerResultado;
        movimientos++;
        mostrarMovimientos.innerHTML = 'Movi' + '<br>' + 'mientos: ' + movimientos;


        //deshabilitar el primer boton
        tarjeta1.disabled = true;
    } else if (tarjetasDestapadas == 2) {
        

        tarjeta2 = document.getElementById(id);
        segundoResultado = imagenes[id];
        tarjeta2.src = segundoResultado; 

        //deshabilitar segundo boton
        tarjeta2.disabled = true;

        //incrementar movimientos
        movimientos++;
        mostrarMovimientos.innerHTML = 'Movi' + '<br>' + 'mientos: ' + movimientos;

        if (primerResultado == segundoResultado) {
            //encerar contador tarjetas destapadas
            tarjetasDestapadas = 0;

            //aumentar aciertos
            aciertos++;
            mostrarAciertos.innerHTML = 'Aciertos: ' + aciertos;

            if (aciertos == 8) {
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = 'Aciertos: ' + aciertos;
                mostrarMovimientos.innerHTML = 'Movi' + '<br>' + 'mientos: ' + movimientos;
            }
            //caso contrario
        } else {
            //mostrar momentaneamente valores y volver a tapar
            //vamos a utilizar el temporizar llamado setTimeout que me permite ejecutar algo en cierto tiempo.
            //quiero que se muestre el resultado y despues de cierto tiempo que se vuelvan a tapar
            setTimeout(() => {
                
                tarjeta1.src = '../imagenes/logo.jpg';
                tarjeta2.src = '../imagenes/logo.jpg';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            }, 800);
        }

    }

}