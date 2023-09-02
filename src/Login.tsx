import React, { useState } from "react";
import { Link } from "react-router-dom";
import users from "./users.json";

interface LoginProps {
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

interface User {
  id: number;
  username: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = users.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setUser(user);
      setError("Logged in as " + username);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p style={{ color: "red" }}>{error}</p>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
