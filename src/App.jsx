
import React, { useState } from 'react';
import './App.css';

function App() {
    const [name, setName] = useState("Sofia");
    const [newName, setNewName] = useState("");

    const addName = (e) => {
        e.preventDefault();
        const inputName = e.target.elements.newName.value.trim();
        if (inputName.length === 0) {
            console.error('Campo no completado');
        } else {
            setName(inputName);
            setNewName(''); 
        }
    };

    return (
        <div>
            <h2>Mis Profesores</h2>
            <form onSubmit={addName}>
                <input
                    type="text"
                    name="newName"
                    value={newName}
                    placeholder="add a name"
                    onChange={e => setNewName(e.target.value)}
                />
                <button type="submit">Añadir Profesor</button>
            </form>
            <p>Nombre: {name}</p>
        </div>
    );
}

export default App;
