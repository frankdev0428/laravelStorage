import React, { useState, useEffect } from "react";
import Axios from "axios";

function Dashboard() {
  const [userData, setUserData] = useState<any>({}); // Initialize with appropriate data structure
  const [credentials, setCredentials] = useState([]); // Initialize with appropriate data structure

  useEffect(() => {
    // Fetch user data from the API
    Axios.get("/api/user-data")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        // Handle errors
      });

    // Fetch user's stored credentials from the API
    Axios.get("/api/credentials")
      .then((response) => {
        setCredentials(response.data);
      })
      .catch((error) => {
        // Handle errors
      });
  }, []);
  return (
    <div className="bg-gray-100 h-screen">
      <div className="p-8 w-1/2 mx-auto">
        <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>
        <div className="mb-4">
          <h3 className="text-xl font-bold">User Information</h3>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Stored Credentials</h3>
          <ul className="list-disc list-inside">
            {credentials.map((credential: any) => (
              <li key={credential.id}>{credential.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
 
}

export default Dashboard;
