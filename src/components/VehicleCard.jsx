import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export const VehicleCard = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVehicles = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5075/api/Cars?Status=Disponible&PageNumber=1&PageSize=100"
        );
        setVehicles(response.data);
        setLoading(false); // Una vez cargados los vehículos, establece loading en false
      } catch (error) {
        console.error("Error fetching vehicles:", error);
        setLoading(false); // Si hay un error, establece loading en false para mostrar un mensaje de error
      }
    };
    getVehicles();
  }, []);

  return(
    <div className="container mt-4">
      <div className="row">
        {loading ? ( // Muestra "Loading..." mientras se cargan los vehículos
          <div className="col-md-12 d-flex justify-content-center align-items-center">
            <h4>Loading...</h4>
          </div>
        ) : (
          vehicles.map(vehicle => (
            <div key={vehicle.carID} className="col-md-4 mb-3">
              <Link to={`/vehicle/${vehicle.carID}`} className="text-decoration-none"> {/* Enlace que lleva a la página del vehículo */}
                <div className="card h-100"> {/* Añade la clase h-100 para establecer una altura fija */}
                  <div className="card-body">
                    <h4 className="card-title">{vehicle.modelName} {vehicle.brandName} {vehicle.year}</h4>
                    <p className="card-text">{vehicle.condition}</p>
                    <p className="card-text">Color: {vehicle.color}</p>
                    <p className="card-text">Precio: ${vehicle.price}</p>
                    <p className="card-text">Millaje: {vehicle.mileage}</p>
                    <p className="card-text">Transmisión: {vehicle.transmission}</p>
                    <p className="card-text">Tracción: {vehicle.traction}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
