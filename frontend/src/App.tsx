import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css'

function App() { 

  return (
    <>
    <Router>
      <AuthProvider>
      <nav>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
        
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      </AuthProvider>
      </Router>
    </>
  )
}

export default App
