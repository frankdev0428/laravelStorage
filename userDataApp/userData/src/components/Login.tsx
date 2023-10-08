import React, { useState } from 'react';
import Axios from 'axios';

const Login = () => {
  const [username, setUsername ] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit =async (e: React.FormEvent ) => {
    e.preventDefault();
    try {
      const response = await Axios.post("/api/login", {
        username,
        password,
      });
      // Handle the response (e.g. , set user information in state or local storage)
    } catch(error) {
      //handle errors (e.g., show and error message)
    }
  }

  return (
    <div>Login</div>
  )
}

export default Login