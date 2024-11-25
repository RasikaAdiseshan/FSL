import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [message, setMessage] = useState("");

    // Fetch data from backend
    useEffect(() => {
        axios.get("http://localhost:5000/api/message")
            .then((response) => {
                setMessage(response.data.message);
            })
            .catch((error) => {
                console.error("Error fetching message:", error);
            });
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>React-Node Integration Demo</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;
