import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Auth from './pages/Auth';
import './App.css'

function App() { 

  return (
    <>
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
