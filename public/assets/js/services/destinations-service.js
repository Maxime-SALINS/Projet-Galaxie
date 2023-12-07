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
    let result = "";
    let error = "";
    for (let i = 0; i < destinations.length; i++) {
        if (destinations[i].id === destinationId){
            result = destinations[i]
        } else {
           error = 404;
        }
    }
    
    console.log(result);

    if (result === "") { 
        window.location.href = "error.html?error=" + error;
    }

    let destinationname = document.getElementById('destination-name');
    destinationname.innerHTML = result.name
    let destinationloca = document.getElementById('destination-location');
    destinationloca.innerHTML = result.location

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