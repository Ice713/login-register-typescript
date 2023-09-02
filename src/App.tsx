import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import Homepage from "./Homepage";

interface User {
  id: number;
  username: string;
  password: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route
            path="/login"
            element={<Login setUser={setUser} />}
          ></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
