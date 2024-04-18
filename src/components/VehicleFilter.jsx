import React, { useEffect, useState } from 'react'
import { VehicleCard } from './VehicleCard';
import { Filter } from './Filter';
import axios from 'axios';

export const VehicleFilter = () => {
    const [vehicles, setVehicles] = useState([]);
    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);
    const [conditionFilter, setConditionFilter] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [modelFilter, setModelFilter] = useState('');
    const [filteredVehicles, setFilteredVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [brandsResponse, modelsResponse, vehiclesResponse] = await Promise.all([
                    axios.get('http://localhost:5075/api/Brands'),
                    axios.get('http://localhost:5075/api/Models'),
                    axios.get('http://localhost:5075/api/Cars')
                ]);
                setBrands(brandsResponse.data);
                setModels(modelsResponse.data);
                setVehicles(vehiclesResponse.data);
                setFilteredVehicles(vehiclesResponse.data); // Inicializar filteredVehicles con todos los vehículos
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

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
        setFilteredVehicles(vehicles); // Restaurar los vehículos filtrados a la lista completa
    };

    const handleSearch = () => {
        // Aplicar los filtros seleccionados y actualizar la lista de vehículos filtrados
        const filtered = vehicles.filter(vehicle =>
            (!conditionFilter || vehicle.condition === conditionFilter) &&
            (!brandFilter || vehicle.brandName === brandFilter) &&
            (!modelFilter || vehicle.modelName === modelFilter)
        );
        setFilteredVehicles(filtered);
    };

    return (
        <div className="container mt-4">
            <div className="row mb-3">
                <div className="col-md-4">
                    <select className="form-select form-select-sm" value={conditionFilter} onChange={handleConditionChange}>
                        <option value="">Condición</option>
                        <option value="Nuevo">Nuevo</option>
                        <option value="Usado">Usado</option>
                        <option value="Casi nuevo">Casi nuevo</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <select className="form-select form-select-sm" value={brandFilter} onChange={handleBrandChange}>
                        <option value="">Marca</option>
                        {brands.map((brand, index) => (
                            <option key={index} value={brand.brandName}>{brand.brandName}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    {brandFilter && (
                        <select className="form-select form-select-sm" value={modelFilter} onChange={handleModelChange}>
                            <option value="">Modelo</option>
                            {models
                                .filter(model => model.brandName === brandFilter)
                                .map((model, index) => (
                                    <option key={index} value={model.modelName}>{model.modelName}</option>
                                ))}
                        </select>
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-end">
                    <button className="btn btn-primary mr-2" onClick={handleSearch}>Buscar</button>
                    <button className="btn btn-secondary" onClick={handleClearFilters}>Borrar Filtros</button>
                </div>
            </div>
            <div className="row" style={{ minHeight: '40vh' }}>
                {loading ? (
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <h4>Loading...</h4>
                    </div>
                ) : filteredVehicles.length > 0 ? (
                    filteredVehicles.map(vehicle => (
                        <div key={vehicle.id} className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{vehicle.brandName} {vehicle.modelName}</h5>
                                    <p className="card-text">Condición: {vehicle.condition}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-md-12 d-flex justify-content-center align-items-center no-result">
                        <h4>No hay resultados</h4>
                    </div>
                )}
            </div>
        </div>
    );
};

// export const VehicleFilter = () => {
//     const [vehicles, setVehicles] = useState([]);
//     const [brands, setBrands] = useState([]);
//     const [models, setModels] = useState([]);
//     const [brandFilter, setBrandFilter] = useState('');
//     const [modelFilter, setModelFilter] = useState('');
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchVehicles = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5075/api/Cars');
//                 console.log(response)
//                 const data = response.data;
//                 setVehicles(data);
//                 const uniqueBrands = [...new Set(data.map(vehicle => vehicle.brandName))];
//                 const uniqueModels = [...new Set(data.map(vehicle => vehicle.modelName))];
//                 setBrands(uniqueBrands);
//                 setModels(uniqueModels);
//             } catch (error) {
//                 console.error('Error fetching vehicles:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchVehicles();
//     }, []);

//     const handleBrandChange = (e) => {
//         setBrandFilter(e.target.value);
//         setModelFilter('');
//     };

//     const handleModelChange = (e) => {
//         setModelFilter(e.target.value);
//     };

//     const handleClearFilters = () => {
//         setBrandFilter('');
//         setModelFilter('');
//     };

//     const filteredVehicles = vehicles.filter(vehicle =>
//         (!brandFilter || vehicle.brandName === brandFilter) &&
//         (!modelFilter || vehicle.modelName === modelFilter)
//     );

//     return (
//         <div className="container mt-4">
//             <Filter
//                 brandFilter={brandFilter}
//                 modelFilter={modelFilter}
//                 handleBrandChange={handleBrandChange}
//                 handleModelChange={handleModelChange}
//                 handleClearFilters={handleClearFilters}
//                 brands={brands}
//                 models={models}
//             />

//             <div className="row" style={{ minHeight: '40vh' }}>
//                 {loading ? (
//                     <div className="col-md-12 d-flex justify-content-center align-items-center">
//                         <h4>Loading...</h4>
//                     </div>
//                 ) : filteredVehicles.length > 0 ? (
//                     filteredVehicles.map(vehicle => (
//                         <VehicleCard key={vehicle.id} vehicle={vehicle} />
//                     ))
//                 ) : (
//                     <div className="col-md-12 d-flex justify-content-center align-items-center no-result">
//                         <h4>No hay resultados</h4>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };


