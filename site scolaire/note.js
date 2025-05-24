// Vérification d'authentification
if (!sessionStorage.getItem("authenticated")) {
    sessionStorage.setItem("redirectTo", window.location.href); // Stocke la page actuelle
    alert("Veuillez vous connecter pour accéder à ce module.");
    window.location.href = "connexion.html"; // Redirection vers la page de connexion
}

// Gestion de l'ajout de notes
const notesContainer = document.getElementById("notes-container");
const addNoteForm = document.getElementById("add-note-form");

addNoteForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Récupérer les valeurs du formulaire
    const subject = document.getElementById("subject").value;
    const grade = document.getElementById("grade").value;
    const appreciation = document.getElementById("appreciation").value;

    // Validation simple
    if (!subject || !grade || !appreciation) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Création d'un nouvel élément pour la note
    const noteItem = document.createElement("li");
    noteItem.classList.add("note-item");

    noteItem.innerHTML = `
        <h3>${subject} - Note : ${grade}/20</h3>
        <p>${appreciation}</p>
        <button class="delete-btn">Supprimer</button>
    `;

    // Ajout de la note dans la liste
    notesContainer.appendChild(noteItem);

    // Réinitialisation du formulaire
    addNoteForm.reset();

    // Ajout de la fonctionnalité de suppression
    noteItem.querySelector(".delete-btn").addEventListener("click", function () {
        notesContainer.removeChild(noteItem);
        alert("Note supprimée.");
    });

    alert("Note ajoutée avec succès !");
});
