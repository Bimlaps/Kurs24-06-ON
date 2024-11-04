const API_URL = 'http://localhost:4000'; // Backend URL

function getTodos() {
    fetch(`${API_URL}/todos`)
        .then(response => response.json())
        .then(json => loadTodos(json))
        .catch(error => console.error('Fehler beim Laden der Todos:', error));
}

function loadTodos(todos) {
    const taskList = document.getElementById('task-list');
    if (taskList) {
        taskList.innerHTML = '';
        todos.forEach(todo => taskToHtml(todo));
    }
}

function taskToHtml(todo) {
    let listItem = document.createElement('li');
    listItem.id = todo.id;
    listItem.setAttribute('userId', todo.userId);

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    let taskText = document.createElement('span');
    taskText.textContent = todo.title + ' ';

    let delButton = document.createElement('button');
    delButton.textContent = "Delete Task";

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(delButton);

    document.getElementById('task-list').appendChild(listItem);
}

// Neue Todo hinzufügen
function addTask() {
    // Input-Wert holen und trimmen
    let taskContent = document.getElementById('userInput').value.trim();
    
    // Prüfen ob Input nicht leer ist
    if (!taskContent) {
        alert('Bitte geben Sie eine Aufgabe ein!');
        return;
    }

    // POST Request an Backend
    fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: taskContent,
            completed: false
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Netzwerkantwort war nicht ok');
        }
        return response.json();
    })
    .then(newTodo => {
        // Input-Feld leeren
        document.getElementById('userInput').value = '';
        // Todos neu laden
        getTodos();
    })
    .catch(error => {
        console.error('Fehler:', error);
        alert('Fehler beim Hinzufügen der Aufgabe');
    });
}

// Event-Listener hinzufügen
document.getElementById('add-task').addEventListener("click", addTask);

// Initial Todos laden
getTodos();