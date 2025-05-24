// Gestion de l'ajout d'un nouvel objectif
document.getElementById("add-objectif-btn").addEventListener("click", function () {
    const objectifTitre = prompt("Entrez le titre de votre objectif :");
    const objectifDescription = prompt("Entrez la description de votre objectif :");

    if (objectifTitre && objectifDescription) {
        const objectifsContainer = document.querySelector(".objectifs-container");

        // Création d'un nouvel élément pour l'objectif
        const newObjectif = document.createElement("article");
        newObjectif.classList.add("objectif-item");

        newObjectif.innerHTML = `
            <h3>${objectifTitre}</h3>
            <p>${objectifDescription}</p>
        `;

        objectifsContainer.appendChild(newObjectif);
        alert("Objectif ajouté avec succès !");
    } else {
        alert("Veuillez remplir le titre et la description de l'objectif.");
    }
});
