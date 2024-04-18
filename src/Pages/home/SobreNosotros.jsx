import React from "react";
import { TopImage } from "../../components/TopImage";

export const SobreNosotros = () => {
  return (
    <>
      <TopImage pageTitle="SOBRE NOSOTROS" imageUrl="src\img\Contact.png" />
      <div className="container mt-5 mb-5 text-center" style={{ minHeight: '35vh'}}>
        <div className="row">
          <div className="col-md-4">
            <div className="mt-4">
              <h2>Misión</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                congue ligula at ligula ultricies fermentum. Nullam non
                fermentum elit. Duis interdum mi ut nisi euismod, id fermentum
                arcu feugiat. Vivamus fermentum ullamcorper ligula. Nullam vel
                magna non tortor iaculis volutpat. Morbi ac ante vel libero
                pulvinar efficitur id ac nunc.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mt-4">
              <h2>Visión</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                congue ligula at ligula ultricies fermentum. Nullam non
                fermentum elit. Duis interdum mi ut nisi euismod, id fermentum
                arcu feugiat. Vivamus fermentum ullamcorper ligula. Nullam vel
                magna non tortor iaculis volutpat. Morbi ac ante vel libero
                pulvinar efficitur id ac nunc.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mt-4 mb-5">
              <h2>Valores</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                congue ligula at ligula ultricies fermentum. Nullam non
                fermentum elit. Duis interdum mi ut nisi euismod, id fermentum
                arcu feugiat. Vivamus fermentum ullamcorper ligula. Nullam vel
                magna non tortor iaculis volutpat. Morbi ac ante vel libero
                pulvinar efficitur id ac nunc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
