import React from 'react'

export const Filter = ({ conditionFilter, brandFilter, modelFilter, handleConditionChange, handleBrandChange, handleModelChange, handleClearFilters, brands, models, vehicles }) => {
  return (
    <div className="container mt-3 mb-5 cuadro-sombreado rounded">
      <h2 className="mb-4">Filtros</h2>
      <div className="card p-3">
        <div className="row">
          <div className="col-md-4 mb-3">
            <select className="form-select form-select-sm" value={conditionFilter} onChange={handleConditionChange}>
              <option value="">Condición</option>
              <option value="Nuevo">Nuevo</option>
              <option value="Usado">Usado</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <select className="form-select form-select-sm" value={brandFilter} onChange={handleBrandChange}>
              <option value="">Marca</option>
              {brands.map((brand, index) => (
                <option key={index} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mb-3">
            {brandFilter && (
              <select className="form-select form-select-sm" value={modelFilter} onChange={handleModelChange}>
                <option value="">Modelo</option>
                {models
                  .filter(model => vehicles.find(vehicle => vehicle.brandName === brandFilter && vehicle.modelName === model))
                  .map((model, index) => (
                    <option key={index} value={model}>{model}</option>
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
}

