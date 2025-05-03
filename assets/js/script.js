/* --------- #6 Creación dinámica de tarjetas para películas Y proyectos------------- */
loadCards(peliculasFavoritas, 'movies');
loadCards(proyectos, 'projects');

function loadCards(unObjeto, unId){
    //Obtengo el contenedor principal por su ID
    let container = document.getElementById(unId);
    //Recorro el array de películas y, por cada una, creo su estructura HTML
    unObjeto.forEach(element => {
        let article = document.createElement('article');
        if (unId === 'movies'){
            article.classList.add('movie', 'card');
        } else {
            article.classList.add('article-card', 'card');
        }
        article.innerHTML = `
        <h3 class="movie-title">${element.title}</h3>
        <div class="${unId === 'movies' ? "movie-container-detail" : "project-card"}">
        <figure>
            <img class= "${unId === 'movies' ? "img-movies" : "img-card"}" src=${element.image} alt=${element.alt}>
        </figure>
        <p class="text-card"> ${element.description}</p>
        </div>
        `;
    // Inserto el artículo generado dentro del contenedor correspondiente en el DOM
    container.querySelector(`${unId === 'movies' ? '.movies-container' : '.card-container'}`).appendChild(article);
    });
}

/**---------------- 2. Contador de visitas (#9) ------------------------------- */
visitCounter();

function visitCounter(){
    let visits = localStorage.getItem("visitsCounter");
    if (visits){
        visits = parseInt(visits) + 1;
    } else {
        visits = 1;
    }

    localStorage.setItem('visitsCounter', visits);
    const element = document.getElementById("visit-counter");
    if (element){
        element.textContent = `Número de visitas: ${visits}`;
    }
}


/**------------------------3. Modo Claro/Oscuro----------------------------- */

const changeBtn = document.getElementById('btnChangeTheme');

function setTheme(isDark) {
    document.body.classList.toggle('dark-theme', isDark);
    changeBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark'){
    setTheme(true);
}

changeBtn.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-theme');
    setTheme(isDark);
})

/** ---------------------- 4. (#1) y Pop-up de Confirmación de Envío(#3) -------------- */

function validarFormularioContacto() {
    const form = document.querySelector('.form-contact');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const fields = [
        { id: 'name', name: 'nombre' },
        { id: 'lastName', name: 'apellido' },
        { id: 'email', name: 'email' },
        { id: 'phone', name: 'teléfono' },
        { id: 'message', name: 'mensaje' }
      ];

      for (const field of fields) {
        const input = document.getElementById(field.id);
        const value = input.value.trim();

        // Validar campo vacío
        if (!value) {
          alert(`Por favor, completá el campo ${field.name}.`);
          input.focus();
          input.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }

        // Validar email
        if (field.id === 'email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            alert('Por favor, ingresá un email válido.');
            input.focus();
            input.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
          }
        }
      }

      alert('✅ ¡Mensaje enviado correctamente!');
      form.reset();
    });
  }

  // Llamá a la función cuando cargue la página:
  document.addEventListener('DOMContentLoaded', validarFormularioContacto);

  /**------------------------ 5. Ocultar y/o Mostrar Contenido (#4) -------------------------- */

  document.getElementById('btnShowContact').addEventListener('click', showContactForm);
  function showContactForm(){
    const showBtn = document.getElementById('btnShowContact');
    const contactForm = document.getElementById('formContact');
    const isVisible = window.getComputedStyle(contactForm).display !== 'none';
    contactForm.style.display = isVisible ? 'none' :'flex';
    showBtn.textContent = isVisible ? '👁️' : '🙈';
  }