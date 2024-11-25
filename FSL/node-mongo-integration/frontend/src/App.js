import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");

    // Fetch items from backend
    useEffect(() => {
        axios.get("http://localhost:5000/api/items")
            .then(response => setItems(response.data))
            .catch(err => console.error("Error fetching items:", err));
    }, []);

    // Add a new item
    const addItem = () => {
        axios.post("http://localhost:5000/api/items", { name: newItem })
            .then(response => setItems([...items, response.data]))
            .catch(err => console.error("Error adding item:", err));
        setNewItem(""); // Clear input
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Node.js + MongoDB Integration</h1>

            <input
                type="text"
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                placeholder="Add new item"
            />
            <button onClick={addItem}>Add Item</button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
