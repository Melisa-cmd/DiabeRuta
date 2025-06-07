// Esperamos a que todo el contenido del DOM (HTML) esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos el botón de la hamburguesa por su clase
    const menuToggle = document.querySelector('.menu-toggle');
    // Seleccionamos la navegación principal por su clase
    const mainNav = document.querySelector('.navegacion-principal');
    // Seleccionamos el body para añadir una clase que bloquee el scroll
    const body = document.body;

    // Añadimos un "escuchador de eventos" (event listener) al botón
    // Cuando se haga clic en el botón, se ejecutará la función
    menuToggle.addEventListener('click', function() {
        // Alternamos la clase 'open' en el botón (para la animación de la 'X')
        this.classList.toggle('open');
        // Alternamos la clase 'menu-open' en la navegación (para mostrar/ocultar)
        mainNav.classList.toggle('menu-open');
        // Alternamos la clase 'no-scroll' en el body para evitar el scroll del fondo
        body.classList.toggle('no-scroll');
    });

    // Opcional: Cerrar el menú si se hace clic en un enlace del menú
    // Esto mejora la experiencia de usuario en móviles
    const navLinks = document.querySelectorAll('.navegacion-principal a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (menuToggle.classList.contains('open')) { // Solo si el menú está abierto
                menuToggle.classList.remove('open');
                mainNav.classList.remove('menu-open');
                body.classList.remove('no-scroll');
            }
        });
    });
});

// --- Lógica para el Carrusel/Slider de Imágenes ---
let slideIndex = 1;
showSlides(slideIndex);

// Controles de siguiente/anterior
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controles de imagen en miniatura (dots)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carrusel-slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Carrusel automático (opcional, puedes ajustar el tiempo o eliminarlo si prefieres manual)
// Descomenta la siguiente línea si quieres que avance automáticamente cada 4 segundos
// setInterval(function() { plusSlides(1); }, 4000); 


