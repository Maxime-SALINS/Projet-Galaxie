console.log('assets/js/destinations.js chargé ✅');
console.log('Tableau des destinations : ', destinations);

// Récupération de l'id de la destination dans l'URL
let params = new URLSearchParams(window.location.search);

// Conversion de la valeur de l'id en nombre entier
let destination = parseInt(params.get('destination'));

// Appel de la fonction getDestination
getDestination(destinations, destination);