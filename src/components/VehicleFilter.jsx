import React, { useState } from 'react'
import { VehicleCard } from './VehicleCard';
import { Filter } from './Filter';

export const VehicleFilter = () => {

    const vehicles = [
        { id: 1,condition: 'Nuevo', brand: 'Toyota', model: 'Corolla', year: 2022 },
        { id: 4, condition: 'Nuevo', brand: 'Toyota', model: 'Vit', year: 2022 },
        { id: 2, condition: 'Usado', brand: 'Honda', model: 'Civic', year: 2019 },
        { id: 3, condition: 'Nuevo', brand: 'Ford', model: 'Mustang', year: 2021 },
        { id: 6, condition: 'Nuevo', brand: 'Ford', model: 'Mustang', year: 2021 },
      ];
    
    const brands = [...new Set(vehicles.map(vehicle => vehicle.brand))];
    const models = [...new Set(vehicles.map(vehicle => vehicle.model))];

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
        (!brandFilter || vehicle.brand === brandFilter) &&
        (!modelFilter || vehicle.model === modelFilter)
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

        <div className="row">
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
