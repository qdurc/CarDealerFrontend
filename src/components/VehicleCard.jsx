import React from 'react'

export const VehicleCard = ({ vehicle }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card mb-3">
        <img src="src\img\logo.jpg" className="card-img-top" alt={vehicle.brand} />
        <div className="card-body">
          <h5 className="card-title">{vehicle.brand} {vehicle.model}</h5>
          <p className="card-text">Condición: {vehicle.condition}</p>
          <p className="card-text">Año: {vehicle.year}</p>
        </div>
      </div>
    </div>
  );
}
