// pages/CarListPage.js
import React, { useEffect, useState } from 'react';
import CarCard from '../components/CarCard';

function CarListPage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const storedCars = JSON.parse(localStorage.getItem('cars')) || [];
    setCars(storedCars);
  }, []);

  return (
    <div>
      <h2>Available Cars</h2>
      {cars.length === 0 ? (
        <p>No cars available.</p>
      ) : (
        cars.map((car, index) => <CarCard key={index} car={car} />)
      )}
    </div>
  );
}

export default CarListPage;
