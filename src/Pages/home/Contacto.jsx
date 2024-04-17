import React from "react";
import { TopImage } from "../../components/TopImage";
import { ContactForm } from "../../components/ContactForm";

export const Contacto = () => {
  return (
    <>
      <TopImage pageTitle="CONTACTO" imageUrl="src\img\Contact.png" />

      <div className="container mt-5 mb-5">
        <div className="cuadro-sombreado p-5 rounded">
            <ContactForm/>
        </div>
      </div>
      
    </>
  );
};
