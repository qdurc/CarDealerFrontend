import React from 'react'
import { VehicleCard } from '../../components/VehicleCard'
import { VehicleFilter } from '../../components/VehicleFilter'

export const Inventario = () => {
  return (

    <div className="container mt-4">
      <h2 className="mb-4">Lista de Vehículos</h2>
      <div className="row">
        <VehicleFilter />
      </div>
    </div>
  )
}
