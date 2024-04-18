import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const Filter = ({ brandFilter, modelFilter, handleBrandChange, handleModelChange, handleClearFilters }) => {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchBrandsAndModels = async () => {
      try {
        // Fetch brands
        const brandsResponse = await axios.get('http://localhost:5075/api/Brands');
        setBrands(brandsResponse.data);

        // Fetch models
        const modelsResponse = await axios.get('http://localhost:5075/api/Models');
        setModels(modelsResponse.data);
      } catch (error) {
        console.error('Error fetching brands and models:', error);
      }
    };
    fetchBrandsAndModels();
  }, []);

  // Filtrar modelos basados en la marca seleccionada
  const filteredModels = brandFilter ? models.filter(model => model.brandName === brandFilter) : [];

  return (
    <div className="container mt-3 mb-5 cuadro-sombreado rounded">
      <h2 className="mb-4">Filtros</h2>
      <div className="card p-3">
        <div className="row">
          <div className="col-md-4 mb-3">
            <select className="form-select form-select-sm" value={brandFilter} onChange={handleBrandChange}>
              <option value="">Marca</option>
              {brands.map((brand, index) => (
                <option key={index} value={brand.brandName}>{brand.brandName}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mb-3">
            {brandFilter && (
              <select className="form-select form-select-sm" value={modelFilter} onChange={handleModelChange}>
                <option value="">Modelo</option>
                {filteredModels.map((model, index) => (
                  <option key={index} value={model.modelName}>{model.modelName}</option>
                ))}
              </select>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-end">
            <button className="btn btn-secondary" onClick={handleClearFilters}>Borrar Filtros</button>
          </div>
        </div>
      </div>
    </div>
  );
};

