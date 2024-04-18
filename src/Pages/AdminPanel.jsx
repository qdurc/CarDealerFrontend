import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../utilities";
import { VehicleForm } from "../components/VehicleForm";
import axios from "axios";
import Swal from "sweetalert2";

export const AdminPanel = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [vehicles, setVehicles] = useState([]);

  const handleEdit = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowEditForm(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.post(
        `http://localhost:5075/api/Cars/${id}?status=Archivado`
      );
      const updatedVehicles = vehicles.filter((vehicle) => vehicle.carID !== id);
      setVehicles(updatedVehicles);
      Swal.fire({
        icon: 'success',
        title: '¡Vehículo eliminado!',
        text: 'El vehículo ha sido eliminado correctamente.',
      });
    } catch (error) {
      console.error("Error deleting vehicle:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al eliminar el vehículo. Por favor, inténtalo de nuevo más tarde.',
      });
    }
  };

  const handleSubmitForm = async () => {
    try {
      if (selectedVehicle) {
        setShowEditForm(false);
        Swal.fire({
          icon: 'success',
          title: '¡Vehículo actualizado!',
          text: 'El vehículo ha sido actualizado correctamente.',
        });
      } else {
        setShowEditForm(true);
        Swal.fire({
          icon: 'success',
          title: '¡Vehículo agregado!',
          text: 'El vehículo ha sido agregado correctamente.',
        });
      }
      uploadImage();
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Oops...',
      //   text: 'Hubo un error al procesar el formulario. Por favor, inténtalo de nuevo más tarde.',
      // });
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
          "http://localhost:5075/api/Cars?Status=Disponible&PageNumber=1&PageSize=100"
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
                    onClick={() => {
                      Swal.fire({
                        title: '¿Estás seguro?',
                        text: "¡No podrás revertir esto!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Sí, eliminarlo!'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          handleDelete(vehicle.carID);
                        }
                      });
                    }}
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