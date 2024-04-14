import React from "react";
import { TopImage } from "../components/TopImage";
import { ContactForm } from "../components/ContactForm";

export const Contacto = () => {
  return (
    <>
      <TopImage pageTitle="CONTACTO" imageUrl="src\img\Contact.png" />

      <div className="container mt-5 mb-5">
        <div className="cuadro-sombreado p-5 rounded">

            <ContactForm/>

        </div>
      </div>
      
      <div className="container">
      <hr/>
        <h1>Lorem</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit praesentium libero iure? Adipisci, 
            possimus velit expedita tempora labore dolor eveniet placeat corrupti ad sed quisquam! 
            Illum doloribus ipsum atque provident.
        </p>

      </div>
    </>
  );
};
