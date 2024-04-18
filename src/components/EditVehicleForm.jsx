import React from "react";

export const EditVehicleForm = ({ onSubmit, vehicle, onClose }) => {
  const [formData, setFormData] = useState(vehicle);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container mt-4" style={{ maxWidth: '80vh', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <div className="mb-3">
          <label className="form-label">Modelo</label>
          <input
            type="text"
            className="form-control"
            name="modelName"
            value={formData.modelName}
            onChange={handleChange}
            required
          />
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
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={onClose}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
