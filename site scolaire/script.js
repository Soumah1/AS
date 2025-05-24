// Accéder aux éléments du DOM
const loginModal = document.getElementById("login-modal");
const closeModal = document.getElementById("close-modal");
const loginForm = document.getElementById("login-form");
const coursLink = document.getElementById("cours-link");
const coursModule = document.getElementById("cours-module");

// Afficher la fenêtre de connexion quand l'utilisateur clique sur "Cours"
coursLink.addEventListener("click", function(event) {
    event.preventDefault(); // Empêche le lien d'ouvrir une nouvelle page
    loginModal.style.display = "flex"; // Affiche la fenêtre de connexion
});

// Fermer la fenêtre de connexion quand l'utilisateur clique sur "X"
closeModal.addEventListener("click", function() {
    loginModal.style.display = "none"; // Cache la fenêtre de connexion
});

// Soumettre le formulaire de connexion
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche la soumission réelle du formulaire pour l'exemple

    // Simuler une connexion réussie (vous pouvez ajouter une vérification ici)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        // Cacher la fenêtre de connexion
        loginModal.style.display = "none";

        // Afficher le module Cours
        coursModule.style.display = "block";
    } else {
        alert("Veuillez entrer un nom d'utilisateur et un mot de passe.");
    }
});
