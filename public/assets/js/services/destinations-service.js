console.log('assets/js/destinations-service.js chargé ✅');

/**
 * Affichage des informations de la destination dans la page destinations.html
 * @param {Array} destinations
 * @param {Number} destinationId
 * Permet de récupérer les informations de la destination depuis son ID dans un tableau de destinations
 * Affiche les informations de la destination dans la page destinations.html ou 
 * redirige vers une page d'erreur 404 si l'id de la destination n'existe pas
 */
function getDestination(destinations, destinationId) {
    // TODO:
    // Initialisation des variables result et error
    // Boucle sur le tableau des destinations pour trouver la destination correspondante à l'id
        // Debug
        // console.log(destinations[i].id);
        // si l'id de la destination correspond à destinationId
            // on stocke la destination dans la variable result
    // fin de la boucle
    // Si la variable result est vide (undefined)
    // cela signifie que l'id de la destination n'existe pas
        // on stocke le code erreur 404 dans la variable error
        // on redirige vers la page d'erreur en passant le code erreur dans l'URL 
        // en paramètre à la clé error
        // Indice : window.location.href = "error.html?error=" + error;
    // Si la variable error est égale à false
        // cela signifie que l'id de la destination existe
        // on affiche les informations de la destination dans la page destinations.html
        // Affichage du nom de la destination dans le titre de la page
        // Affichage du contenu supplémentaire de la destination dans la page
    // Debug du résultat de la recherche si la destination existe
}

/**
 * Affichage des destinations dans la page d'accueil
 * @param {Array} destinations 
 */
function getDestinations(destinations) {

    for (let i = 0; i < destinations.length; i++) {
        
        let destinationContainer = document.createElement('div');
        destinationContainer.innerHTML = `
        <div class="destination">
            <img src=${destinations[i].img} alt="une image de présentatation">
            <h3>${destinations[i].name}</h3>
            <hr>
            <p>${destinations[i].location}</p>
            <a href="destinations.html?destination=${destinations[i].id}">En savoir plus</a>
        </div>

        `
        document.getElementById('list-destination').appendChild(destinationContainer);
    }
}