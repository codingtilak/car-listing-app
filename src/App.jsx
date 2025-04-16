// App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import CarListPage from './pages/carDetails';

function App() {
  return (
    <>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">User View</Link> | <Link to="/admin">Admin Panel</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CarListPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
