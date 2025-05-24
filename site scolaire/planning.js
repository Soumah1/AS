// script.js

const planningContainer = document.querySelector('.planning-container');
const addTaskBtn = document.querySelector('#add-task-btn');

// Fonction pour ajouter une tâche
function addTask(title, description) {
    const task = document.createElement('div');
    task.classList.add('planning-item');

    task.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <button class="btn remove-btn">Supprimer</button>
    `;

    // Ajouter l'événement pour supprimer une tâche
    task.querySelector('.remove-btn').addEventListener('click', () => {
        task.remove();
    });

    planningContainer.appendChild(task);
}

// Événement pour le bouton "Ajouter une tâche"
addTaskBtn.addEventListener('click', () => {
    const title = prompt("Titre de la tâche :");
    const description = prompt("Description de la tâche :");

    if (title && description) {
        addTask(title, description);
    } else {
        alert("Veuillez entrer un titre et une description.");
    }
});
