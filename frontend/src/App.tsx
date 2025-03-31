import { AuthProvider } from './context/AuthContext';
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Auth from './pages/Auth';
import './App.css'

function App() { 

  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    <Router>
      <AuthProvider>
        
      <Routes>
      <Route path="/auth" element={<Auth />} />
      </Routes>

      </AuthProvider>
      </Router>
    </>
  )
}

export default App
