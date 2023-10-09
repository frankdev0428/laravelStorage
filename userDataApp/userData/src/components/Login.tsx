import React, { useState, useContext } from 'react';
import AuthContext from '../Context/AuthContext'; // Import your context
import Axios from 'axios';

function Login() {
  const { login } = useContext(AuthContext); // Access the login function from the context
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // State for error handling

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await Axios.post("/api/login", {
        username,
        password,
      });

      // Assuming the response contains user data upon successful login
      login(response.data); // Call the login function with user data to set the user state

      // Optionally, you can redirect the user to the dashboard or perform other actions.
    } catch (error) {
      // Handle errors (e.g., show an error message)
      setError("Login failed. Please check your credentials and try again.");
    }
  }

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-1/3">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          {error && <div className="text-red-600 mb-4">{error}</div>}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 rounded"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white rounded py-2 px-4">Login</button>
        </form>
        <p className="mt-4">Don't have an account? <a href="/register" className="text-blue-500">Register here</a></p>
      </div>
    </div>
  );
}

export default Login;
