
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";

function App() {
  return (
     <div>
       <Router>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/register" element={<Register />}  />
          <Route path="/dashboard"  element={<Dashboard />}/>
          <Route path="/404" element={<NotFound />} />
        </Routes>
       </Router>
     </div>
  )
}

export default App
