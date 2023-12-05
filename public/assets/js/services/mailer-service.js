console.log('assets/js/mailer-service.js chargé ✅');

/**
 * Envoi d'un email via le service EmailJS
 * @param {Object} infoContact 
 * objet contenant les informations soumises du formulaire {name : String, email : String, message : String}
 */
function sendMail(infoContact) {

	// L'envoie d'email peut se vérifier dans l'interface d'EmailJS
	return Email.send({
		Host: "smtp.elasticemail.com",
		Username: "themaxcraft13@gmail.com",
		Password: "5F91D981E69D45DC40119BBFA01B9D7F8160",
		To: 'contact@gmail.com',
		From: "themaxcraft13@gmail.com",
		Subject: "Une demande de contact depuis le site Space Tour",
		Body: "Une demande de contact a été envoyée depuis le site Space Tour. " + infoContact.message
	}).then(
		// si l'email est envoyé, afficher une alerte de succès
		message => alert(message, "Votre message a bien été envoyé !")
	).catch(
		// si une erreur survient lors de l'envoi de l'email, afficher une alerte d'erreur
		error => alert(error, "Une erreur est survenue lors de l'envoi de votre message.")
	);
}