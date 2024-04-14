import React from 'react'

export const TopImage = ({ pageTitle, imageUrl }) => {
  return (

    <div className="position-relative">
        <img src={ imageUrl } className="card-img top-img" alt="img"/>
        <div className="card-img-overlay d-flex align-items-center justify-content-center">
            <h2 className="card-title text-center text-white card-img"> { pageTitle } </h2>
        </div>
    </div>

  )
}
