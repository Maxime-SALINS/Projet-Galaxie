// Liste des codes erreurs possibles avec leur message
const errors = {
    404: "Page introuvable",
    403: "Accès interdit",
    500: "Erreur interne du serveur",
    503: "Service indisponible"
};

// Récupération du code d'erreur dans l'URL
let params = new URLSearchParams(window.location.search);

// Conversion du code d'erreur en type nombre
let codeError = parseInt(params.get('error'));

// Affichage du code d'erreur dans l'élément HTML #error-code
let title = document.getElementById('error-code');
title.innerHTML= codeError

// Affichage du message d'erreur dans l'élément HTML #error-message
let para = document.getElementById('error-message');
para.innerHTML = errors[codeError];
