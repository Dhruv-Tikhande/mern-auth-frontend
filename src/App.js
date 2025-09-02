import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <Router>
      {/* Main container with a light gray background, making it fill the screen height */}
      <div className="bg-gray-100 min-h-screen font-sans">
        <header className="bg-white shadow">
          <nav className="container mx-auto px-6 py-4">
            <ul className="flex space-x-6">
              <li>
                <Link to="/signup" className="text-gray-700 hover:text-blue-600">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-700 hover:text-blue-600">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto px-6 py-12">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Signup />} /> {/* Default route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

