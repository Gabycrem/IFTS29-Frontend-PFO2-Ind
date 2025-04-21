/* --------- #6 Creación dinámica de tarjetas para películas ------------- */
loadCards();
function loadCards(){
    //Obtengo el contenedor principal por su ID
    let container = document.getElementById('movies');
    //Recorro el array de películas y, por cada una, creo su estructura HTML
    peliculasFavoritas.forEach(pelicula => {
        let article = document.createElement('article');
        article.classList.add('movie', 'card');
        article.innerHTML = `
        <h3 class="movie-title">${pelicula.title}</h3>
        <div class="movie-container-detail">
        <figure>
            <img class="img-movies" src=${pelicula.image} alt=${pelicula.alt}>
        </figure>
        <p> ${pelicula.description}</p>
        </div>
        `;
    // Inserto el artículo generado dentro del contenedor correspondiente en el DOM
    container.querySelector('.movies-container').appendChild(article);
    });
}


