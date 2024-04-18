import React from 'react'

export const VehicleCard = ({ vehicle }) => {
  return (

    <div className="col-md-4 mb-3">
      <div className="card mb-3 ">
        <img src={vehicle.imageURL} className="card-img-top" alt="Vehicle" />
        <div className="card-body">
          <h4 className="card-title">{vehicle.modelName} {vehicle.brandName} {vehicle.year}</h4>
          <p className="card-text">{vehicle.condition}</p>
          <p className="card-text">Color: {vehicle.color}</p>
          <p className="card-text">Precio: ${vehicle.price}</p>
        </div>
      </div>
    </div>

  );
}
