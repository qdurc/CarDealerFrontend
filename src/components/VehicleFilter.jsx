import React, { useState } from 'react'
import { VehicleCard } from './VehicleCard';
import { Filter } from './Filter';
import vehicles from '../utilities/cars';

export const VehicleFilter = () => {

    const brands = [...new Set(vehicles.map(vehicle => vehicle.modelName))];
    const models = [...new Set(vehicles.map(vehicle => vehicle.brandName))];

    const [conditionFilter, setConditionFilter] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [modelFilter, setModelFilter] = useState('');

    const handleConditionChange = (e) => {
        setConditionFilter(e.target.value);
    };

    const handleBrandChange = (e) => {
        setBrandFilter(e.target.value);
        setModelFilter('');
    };

    const handleModelChange = (e) => {
        setModelFilter(e.target.value);
    };

    const handleClearFilters = () => {
        setConditionFilter('');
        setBrandFilter('');
        setModelFilter('');
      };

    const filteredVehicles = vehicles.filter(vehicle => 
        (!conditionFilter || vehicle.condition === conditionFilter) &&
        (!brandFilter || vehicle.brandName === brandFilter) &&
        (!modelFilter || vehicle.modelName === modelFilter)
      );

  return (
    <div className="container mt-4">
        
        <Filter
            conditionFilter={conditionFilter}
            brandFilter={brandFilter}
            modelFilter={modelFilter}
            handleConditionChange={handleConditionChange}
            handleBrandChange={handleBrandChange}
            handleModelChange={handleModelChange}
            handleClearFilters={handleClearFilters}
            brands={brands}
            models={models}
            vehicles={vehicles}
        />

        <div className="row" style={{ minHeight: '40vh'}}>
            {filteredVehicles.length > 0 ? (
            filteredVehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))
            ) : (
            <div className="col-md-12 d-flex justify-content-center align-items-center no-result">
                <h4>No hay resultados</h4>
            </div>
            )}
      </div>
    </div>
  )
}
