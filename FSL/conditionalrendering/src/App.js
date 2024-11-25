
import './App.css';
import React, { useState } from "react";
function App() {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLogin = () => {
    const trimmedName = userName.trim();

 
    if (!trimmedName) {
      alert("Name cannot be empty!");
    } else if (!/^[a-zA-Z ]+$/.test(trimmedName)) {
      alert("Name can only contain alphabets and spaces!");
    } else if (trimmedName.length < 2) {
      alert("Name must be at least 2 characters long!");
    } else if (trimmedName.length > 50) {
      alert("Name must be less than 50 characters!");
    } else {
      setIsLoggedIn(true); 
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Conditional Rendering with User Input</h1>

      {isLoggedIn ? (
        <div>
          <h2>Welcome, {userName}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please Login</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={handleLogin} style={{ marginLeft: "10px" }}>
            Login
          </button>
        </div>
      )}
    </div>
  );




}

export default App;
