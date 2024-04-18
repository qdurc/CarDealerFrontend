import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../utilities";
import { VehicleForm } from "../components/Vehicleform";
import axios from "axios";

export const AdminPanel = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [vehicles, setVehicles] = useState([]);

  const handleEdit = (vehicle) => {
    console.log(vehicle);
    setSelectedVehicle(vehicle);
    setShowEditForm(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.post(
        `https://localhost:7003/api/Cars/${id}?status=Archivado`
      );
      const updatedVehicles = vehicles.filter((vehicle) => vehicle.id !== id);
      setVehicles(updatedVehicles);
    } catch (error) {
      console.error("Error deleting vehicle:", error);
    }
  };

  const handleSubmitForm = async (formData) => {
    console.log(formData)

    try {
      if (selectedVehicle) {
        //await axios.put(`https://localhost:7003/api/Cars/${selectedVehicle.carID}`, formData)
        //const updatedVehicles = vehicles.map((vehicle) =>
          //vehicle.carID === selectedVehicle.carID ? formData : vehicle
        //);
        //setVehicles(updatedVehicles);
      } else {
        //await axios.post("https://localhost:7003/api/Cars", formData);
        //setVehicles([...vehicles, formData]);
      }
      setShowEditForm(false);
      uploadImage();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleCloseForm = () => {
    setShowEditForm(false);
  };

  const handleAddVehicle = () => {
    setSelectedVehicle(null);

    setShowEditForm(true);
  };

  useEffect(() => {
    const getVehicles = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7003/api/Cars?Status=Disponible&PageNumber=1&PageSize=100"
        );
        setVehicles(response.data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };
    getVehicles();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h1>Administrador</h1>
        <table className="table mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Año</th>
              <th>Color</th>
              <th>Precio</th>
              <th>Condición</th>
              <th>Kilometraje</th>
              <th>Transmisión</th>
              <th>Tracción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle, i) => (
              <tr key={i}>
                <td>{vehicle.carID}</td>
                <td>{vehicle.brandName}</td>
                <td>{vehicle.modelName}</td>
                <td>{vehicle.year}</td>
                <td>{vehicle.color}</td>
                <td>${vehicle.price}</td>
                <td>{vehicle.condition}</td>
                <td>{vehicle.mileage}</td>
                <td>{vehicle.transmission}</td>
                <td>{vehicle.traction}</td>
                <td>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => handleEdit(vehicle)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(vehicle.carID)}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-success" onClick={handleAddVehicle}>
          Agregar Vehículo
        </button>
      </div>

      {showEditForm && (
        <div className="container mt-4 bg-white p-4">
          <h2>{selectedVehicle ? "Editar Vehículo" : "Agregar Vehículo"}</h2>
          <button className="btn-close" onClick={handleCloseForm}></button>
          <VehicleForm
            onSubmit={handleSubmitForm}
            vehicleToEdit={selectedVehicle}
            onClose={handleCloseForm}
          />
        </div>
      )}
    </>
  );
};
