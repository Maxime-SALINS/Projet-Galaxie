console.log('assets/js/destinations.js chargé ✅');
console.log('Tableau des destinations : ', destinations);

// Récupération de l'id de la destination dans l'URL
let params = new URLSearchParams(window.location.search);
let destinationId = parseInt(params.get('destination'));
getDestination(destinations, destinationId);