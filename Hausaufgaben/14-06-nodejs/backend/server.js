import express from 'express'
import cors from 'cors'
import { readFile, writeFile } from 'fs/promises'

const server = express();
const PORT = 4000;

// Middleware
server.use(cors());
server.use(express.json());  // Wichtig für POST-Anfragen!

// Hilfsfunktionen
async function readTodosFromFile() {
    try {
        const fileContent = await readFile('todos.json', 'utf8');
        const data = JSON.parse(fileContent);
        return data.todos;
    } catch (error) {
        console.error('Fehler beim Lesen der Todos:', error);
        return [];
    }
}

async function writeTodosToFile(todos) {
    try {
        await writeFile('todos.json', JSON.stringify({ todos }, null, 2));
        return true;
    } catch (error) {
        console.error('Fehler beim Schreiben der Todos:', error);
        return false;
    }
}

// GET Route - Alle Todos abrufen
server.get("/todos", async (req, res) => {
    try {
        const todos = await readTodosFromFile();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Fehler beim Laden der Todos' });
    }
});

// POST Route - Neues Todo hinzufügen
server.post("/todos", async (req, res) => {
    try {
        // Aktuelle Todos lesen
        const todos = await readTodosFromFile();
        
        // Neue ID generieren (höchste vorhandene ID + 1)
        const newId = todos.length > 0 
            ? Math.max(...todos.map(todo => todo.id)) + 1 
            : 1;
        
        // Neues Todo erstellen
        const newTodo = {
            userId: 1,                // Standard userId
            id: newId,               // Neue ID
            title: req.body.title,   // Titel aus der Anfrage
            completed: false         // Initial nicht abgeschlossen
        };
        
        // Todo zur Liste hinzufügen
        todos.push(newTodo);
        
        // Aktualisierte Liste speichern
        const success = await writeTodosToFile(todos);
        
        if (success) {
            res.status(201).json(newTodo);  // 201 = Created
        } else {
            res.status(500).json({ error: 'Fehler beim Speichern des Todos' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Fehler beim Erstellen des Todos' });
    }
});

server.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});