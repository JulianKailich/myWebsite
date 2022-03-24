
const cambiar = (input) => {
    
    if (input.value === 'Try this!'){
        document.getElementById('colorChange').style.color = 'rgb(216, 66, 96)';
        document.getElementById('theNewButton').style.borderColor = 'rgb(216, 66, 96)'; 
        document.getElementById('theNewButton').style.boxShadow = '0px 0px  18px rgb(216, 66, 96)';
        document.getElementById('aboutTitle').style.color = 'rgb(216, 66, 96)';
        input.value = 'Previous';
    }

    else {
        document.getElementById('colorChange').style.color = 'rgb(4, 255, 255)';
        document.getElementById('theNewButton').style.borderColor = 'rgb(4, 255, 255)';
        document.getElementById('theNewButton').style.boxShadow = '0px 0px  18px rgb(4, 255, 255)';
        document.getElementById('aboutTitle').style.color = 'rgb(4, 255, 255)'
        input.value = 'Try this!';
    }
}

// window.addEventListener es para escuchar constantemente cuando cargue la pagina (load)
window.addEventListener('load', () => {
    const progress = document.getElementById('progress');
    requestAnimationFrame(update);
})

update = () => {            //cantidad pixeles                                  alto total de la ventana
                            //scrolleados en eje Y || alto total del body ||    del buscador
    progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) *100 )}%`
    // request que nos permite ejecutar la funcion cuando se actualice la pantalla
    requestAnimationFrame(update);
} 


const alertForm = () => {
    alert("Thanks for your message!");
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const input4 = document.getElementById('input4');
    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';
}

const typed = new Typed ('.typed', {
    strings: [
        '<span class="continente">North America</span>', 
        '<span class="continente">South America</span>', 
        '<span class="continente">Europe</span>',
        '<span class="continente">Africa</span>', 
        '<span class="continente">Asia</span>', 
        '<span class="continente">The whole world</span>',
    ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});








