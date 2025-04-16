// components/CarCard.js
import React from 'react';

function CarCard({ car }) {
    return (
        <div style={{
            border: "1px solid #ccc", padding: "10px", margin: "10px 0", borderRadius: "8px"
        }}>
            <h3>{car.name} ({car.model})</h3>
            <p>Mileage: {car.mileage} km/l</p>
            <p>Fuel Type: {car.fuel}</p>
            <p>Color: {car.color}</p>
        </div>
    );
}

export default CarCard;

