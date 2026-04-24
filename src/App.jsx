import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Itinerary from './pages/Itinerary';
import { isLoggedIn } from './auth/authUtils';

// protect routes
function ProtectedRoute({ children }) {
    if(!isLoggedIn()) {
        return <Navigate to="/" />
    }
    return children;
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        } />
        <Route path="/itinerary" element={
            <ProtectedRoute>
                <Itinerary />
            </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App;
