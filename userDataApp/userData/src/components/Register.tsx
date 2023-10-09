import React, { useState , useContext} from "react";
import Axios from "axios";
import AuthContext from "../Context/AuthContext";
function Register() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [ error, setError ] = useState<string | null>(null);
  // Add more fields as needed

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await Axios.post("/api/register", {
        username,
        password,
        // Include other form data here
      });
      login(response.data);
      // Handle the response (e.g., show a success message or navigate to the login page)
    } catch (error) {
      // Handle errors (e.g., show an error message)
      setError("Registration failed . Please check your inout and try again.");
    }
  }

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-1/3">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
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
          {/* Add more form fields with Tailwind CSS classes */}
          <button type="submit" className="bg-blue-500 text-white rounded py-2 px-4">Register</button>
        </form>
        <p className="mt-4">Already have an account? <a href="/login" className="text-blue-500">Login here</a></p>
      </div>
    </div>
  );
}

export default Register;
