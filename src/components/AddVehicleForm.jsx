import React from "react";

export const AddVehicleForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    brandName: "",
    // Agregar más campos del vehículo aquí
  });

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
      <div className="mb-3">
        <label className="form-label">Marca</label>
        <input
          type="text"
          className="form-control"
          name="brandName"
          value={formData.brandName}
          onChange={handleChange}
        />
      </div>
      {/* Agregar más campos del vehículo aquí */}
      <button type="submit" className="btn btn-primary">
        Agregar Vehículo
      </button>
      <button
        type="button"
        className="btn btn-secondary ms-2"
        onClick={onClose}
      >
        Cancelar
      </button>
    </form>
  );
};
