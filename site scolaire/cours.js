// Vérification d'authentification
if (!sessionStorage.getItem("authenticated")) {
    sessionStorage.setItem("redirectTo", window.location.href); // Stocke la page actuelle
    alert("Veuillez vous connecter pour accéder à ce module.");
    window.location.href = "connexion.html"; // Redirection vers la page de connexion
}
 
// Gestion de l'ajout d'un nouveau cours
document.getElementById("add-course-btn").addEventListener("click", function () {
    const courseName = prompt("Entrez le nom du nouveau cours :");
    const courseDescription = prompt("Entrez la description du nouveau cours :");

    if (courseName && courseDescription) {
        const courseContainer = document.querySelector(".cours-module");

        // Création d'un nouvel élément de cours
        const newCourse = document.createElement("article");
        newCourse.classList.add("cours-item");

        newCourse.innerHTML = `
            <h3>${courseName}</h3>
            <p>${courseDescription}</p>
            <a href="#" class="btn">Accéder au cours</a>
        `;

        courseContainer.appendChild(newCourse);
        alert("Cours ajouté avec succès !");
    } else {
        alert("Le nom et la description du cours sont obligatoires.");
    }
});
