// Ecoute de l'événement submit sur le formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function (event) {
    // Important : Empêcher le comportement par défaut du navigateur
    event.preventDefault();

    // Récupération des valeurs des champs du formulaire dans des variables
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Création d'un objet avec les valeurs des champs du formulaire
    let infoContact = {
        name: name,
        email: email,
        message: message
    }
    
    // Appel de la fonction sendMail avec l'objet infoContact 
    sendMail(infoContact);
});