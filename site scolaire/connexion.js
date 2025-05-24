// Simulez des utilisateurs avec des noms d'utilisateur et des mots de passe
const users = [
    { username: "suma", password: "2025" },
    { username: "mohamed", password: "abcd" },
    { username: "babacar", password: "1234" },
];

// Gestion de la soumission du formulaire de connexion
document.querySelector(".login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi classique du formulaire

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    // Vérification des informations d'identification
    const user = users.find(
        u => u.username === usernameInput && u.password === passwordInput
    );

    if (user) {
        alert("Connexion réussie !");
        sessionStorage.setItem("authenticated", "true"); // Enregistrer l'état connecté

        // Vérification si une page de destination est stockée
        const redirectTo = sessionStorage.getItem("redirectTo") || "note.html"; // Redirige vers la page d'origine ou la page par défaut
        sessionStorage.removeItem("redirectTo"); // Supprime l'élément après redirection
        window.location.href = redirectTo; // Redirection vers la page enregistrée ou par défaut
    } else {
        alert("Nom d'utilisateur ou mot de passe incorrect !");
    }
});
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
