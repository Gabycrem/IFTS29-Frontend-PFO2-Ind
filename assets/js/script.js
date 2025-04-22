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
