// Attendre que le DOM soit chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    // Lorsque le formulaire est soumis
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Empêche la soumission par défaut du formulaire

        // Récupère les valeurs des champs du formulaire
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Appelle l'API EmailJS pour envoyer le message
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            from_name: name,
            from_email: email,
            message: message
        })
        .then(function (response) {
            alert("Votre message a été envoyé avec succès !");
            form.reset(); // Réinitialise le formulaire après l'envoi
        }, function (error) {
            alert("Erreur lors de l'envoi du message, veuillez réessayer.");
            console.error("Erreur:", error);
        });
    });
});
