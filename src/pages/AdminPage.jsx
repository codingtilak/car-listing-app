// pages/AdminPage.js
import React, { useState } from 'react';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../assets/firebase";

function AdminPage() {
  const [car, setCar] = useState({
    name: '', model: '', mileage: '', fuel: '', color: ''
  });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cars = JSON.parse(localStorage.getItem('cars')) || [];
    cars.push(car);
    const userRef = doc(db, "cars",car.model);
    await setDoc(userRef, car);
    localStorage.setItem('cars', JSON.stringify(cars));
    alert('Car Added!');
    setCar({ name: '', model: '', mileage: '', fuel: '', color: '' });
  };

  return (
    <div>
      <h2>Add Car Details</h2>
      <form onSubmit={handleSubmit}>
        {["name", "model", "mileage", "fuel", "color"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={`Enter ${field}`}
            value={car[field]}
            onChange={handleChange}
            required
          />
        ))}
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default AdminPage;
