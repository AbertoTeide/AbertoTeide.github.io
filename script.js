
// Contador para el botón me gusta debajo de la imágen.

document.addEventListener('DOMContentLoaded', (event) => {
    let likeCount = 0;
    const likeBtn = document.getElementById('like-btn');
    const likeCountSpan = document.getElementById('like-count');

    likeBtn.addEventListener('click', () => {
        likeCount++;
        likeCountSpan.innerText = likeCount;
    });
});


// Cambiar color del texto mediante un selector.

document.addEventListener('DOMContentLoaded', (event) => {
    // Botón de Like
    let likeCount = 0;
    const likeBtn = document.getElementById('like-btn');
    const likeCountSpan = document.getElementById('like-count');

    likeBtn.addEventListener('click', () => {
        likeCount++;
        likeCountSpan.innerText = likeCount;
    });

    // Cambiar color del texto
    const colorPicker = document.getElementById('color-picker');
    colorPicker.addEventListener('input', () => {
        document.body.style.color = colorPicker.value;
    });
});


// Contador de las palabras escritas en el text area del formulario y mostrar la cantidad.

document.addEventListener('DOMContentLoaded', (event) => {
    // Contar palabras en comentarios
    const comentariosInput = document.getElementById('comentarios');
    const wordCountSpan = document.getElementById('word-count');

    comentariosInput.addEventListener('input', () => {
        const wordCount = comentariosInput.value.split(/\s+/).filter(word => word.length > 0).length;
        wordCountSpan.innerText = wordCount;
    });
});


// Aumentar o disminuir la imagen del blog mediante dos botones debajo de la imagen.

document.addEventListener('DOMContentLoaded', (event) => {
    // Aumentar/Disminuir tamaño de la imagen
    const increaseBtn = document.getElementById('increase-img-size-btn');
    const decreaseBtn = document.getElementById('decrease-img-size-btn');
    const img = document.getElementById('ali-img');

    increaseBtn.addEventListener('click', () => {
        img.style.width = (img.clientWidth + 20) + 'px';
    });

    decreaseBtn.addEventListener('click', () => {
        img.style.width = (img.clientWidth - 20) + 'px';
    });
});


// Script para el mensaje "cargando..." al iniciar la página.

document.addEventListener('DOMContentLoaded', (event) => {
    const loadingMessage = document.getElementById('loading-message');
    loadingMessage.style.display = 'block';
    
    setTimeout(() => {
        loadingMessage.style.display = 'none';
    }, 3000);
});


// Cambiar entre modos claro y oscuro del blog mediante botón incluído debajo del primer h1.

document.addEventListener('DOMContentLoaded', (event) => {
    // Cambiar entre modos claro y oscuro
    const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
    
    toggleDarkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});


// Mostrar la hora actual mediante botón añadido al incio del blog debajo del primer h1.

document.addEventListener('DOMContentLoaded', (event) => {
    // Mostrar hora actual en un mensaje emergente
    const showTimeBtn = document.getElementById('show-time-btn');
    
    showTimeBtn.addEventListener('click', () => {
        const currentTime = new Date().toLocaleTimeString();
        alert(`La hora actual es: ${currentTime}`);
    });
});


//Reproducir sonido de audio.mp3 al clickar el botón para ello del blog.
document.addEventListener('DOMContentLoaded', (event) => {
    // Reproducir sonido al hacer clic en el botón
    const playSoundBtn = document.getElementById('play-sound-btn');
    const audio = document.getElementById('audio');
    
    playSoundBtn.addEventListener('click', () => {
        audio.play();
    });
});


// Script para los botones al inicio del blog de aumentar y disminuir el tamaño del texto del blog.

document.addEventListener('DOMContentLoaded', (event) => {
    // Cambiar tamaño de la fuente
    const increaseFontSizeBtn = document.getElementById('increase-font-size-btn');
    const decreaseFontSizeBtn = document.getElementById('decrease-font-size-btn');

    increaseFontSizeBtn.addEventListener('click', () => {
        document.body.style.fontSize = (parseFloat(getComputedStyle(document.body).fontSize) + 2) + 'px';
    });

    decreaseFontSizeBtn.addEventListener('click', () => {
        document.body.style.fontSize = (parseFloat(getComputedStyle(document.body).fontSize) - 2) + 'px';
    });
});


//Script para el botón de mostrar/ocultar el texto del párrafo.

document.addEventListener('DOMContentLoaded', (event) => {
    // Mostrar/Ocultar párrafo de descripción
    const toggleParagraphBtn = document.getElementById('mostrarocultar-btn');
    const descripcion = document.getElementById('descripcion');

    toggleParagraphBtn.addEventListener('click', () => {
        if (descripcion.style.display === 'none') {
            descripcion.style.display = 'block';
        } else {
            descripcion.style.display = 'none';
        }
    });
});
