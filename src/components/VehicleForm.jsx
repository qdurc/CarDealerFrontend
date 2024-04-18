import React, { useEffect, useState } from "react";
import axios from "axios";

export const VehicleForm = ({ onSubmit, vehicleToEdit }) => {
  const [formData, setFormData] = useState({
    modelName: vehicleToEdit ? vehicleToEdit.modelName : "",
    year: vehicleToEdit ? vehicleToEdit.year : "",
    color: vehicleToEdit ? vehicleToEdit.color : "",
    price: vehicleToEdit ? vehicleToEdit.price : "",
    condition: vehicleToEdit ? vehicleToEdit.condition : "",
    mileage: vehicleToEdit ? vehicleToEdit.mileage : "",
    transmission: vehicleToEdit ? vehicleToEdit.transmission : "",
    traction: vehicleToEdit ? vehicleToEdit.traction : "",
    description: vehicleToEdit ? vehicleToEdit.description : "",
    doors: vehicleToEdit ? vehicleToEdit.doors : "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = (id) => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    axios.post(`https://localhost:7003/api/Images/${id}/images`, formData, {
      headers: {
        'Content-Type': 'image/png'
      }
    })
    .then(response => {
      console.log('Image uploaded successfully', response);
      // Hacer algo con la respuesta si es necesario
    })
    .catch(error => {
      console.error('Error uploading image', error);
      // Manejar el error de alguna manera
    });
  };

  const [models, setModels] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (vehicleToEdit) {
        await axios.put(`https://localhost:7003/api/Cars/${vehicleToEdit.carID}`, JSON.stringify(formData), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      } else {
        await axios.post('https://localhost:7003/api/Cars', formData).then(resp => console.log(resp)
      );
        handleUpload(resp.data.carID)
      }
      setFormData({
        modelName: '',
        year: 0,
        color: '',
        price: 0,
        condition: '',
        mileage: 0,
        transmission: '',
        traction: '',
        description: '',
        doors: 0
      });
      if (onSubmit) {
        onSubmit();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await axios.get(`https://localhost:7003/api/Models`)
        setModels(response.data); 
      } catch (error) {
        console.error("Error fetching models:", error);
      }
    };

    fetchModels();
  }, []);

  return (
    <div
      className="container mt-4"
      style={{
        maxWidth: "80vh",
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Imagen</label>
          <input type="file" className="form-control" onChange={handleFileInputChange} />
        </div>

        <div>
          <div className="mb-3">
            <label className="form-label">Modelo</label>
            <select
              className="form-select"
              name="modelName"
              value={formData.modelName}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona un modelo</option>
              {models.map((model) => (
                <option key={model.modelID} value={model.modelName}>
                  {model.modelName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Año</label>
          <input
            type="number"
            className="form-control"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Color</label>
          <input
            type="text"
            className="form-control"
            name="color"
            value={formData.color}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Condición</label>
          <select
            className="form-control"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="Nuevo">Nuevo</option>
            <option value="Casi Nuevo">Casi Nuevo</option>
            <option value="Usado">Usado</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Kilometraje</label>
          <input
            type="number"
            className="form-control"
            name="mileage"
            value={formData.mileage}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Transmisión</label>
          <select
            className="form-control"
            name="transmission"
            value={formData.transmission}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="Automática">Automática</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Tracción</label>
          <select
            className="form-control"
            name="traction"
            value={formData.traction}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="Delantera">Delantera</option>
            <option value="Trasera">Trasera</option>
            <option value="Total">Total</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Puertas</label>
          <input
            type="number"
            className="form-control"
            name="doors"
            value={formData.doors}
            onChange={handleChange}
            min="0" // Evita números negativos
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};
