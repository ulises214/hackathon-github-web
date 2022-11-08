import ModalEditar from "./modal/ModalEditar";
import { useState } from "react";
import Loader from "./Loader";
import Modificar from "../components/Modificar";

const Platillo = ({ nombre, precio, descripcion, img, tiempo }) => {
  const [modificar, setModificar] = useState(false);

  if (modificar) {
    return (
      <Modificar
        nombre={nombre}
        descripcion={descripcion}
        precio={precio}
        tiempo={tiempo}
        img={img}
      />
    );
  }

  return (
    <>
      <div className="card h-100">
        <img
          className="img-fluid rounded"
          defaultValue={img}
          src={img}
          alt={`imagen de ${nombre}`}
        />
        <div className="card-body">
          <h5 className="card-title" defaultValue={nombre}>
            {nombre}
          </h5>
          <label className="card-text">{descripcion}</label>
          <div className="card-text">
            <i className="bi bi-stopwatch me-1" />
            {tiempo}
          </div>
          <p className="card-text">{precio}</p>
          <button
            type="button"
            className="btn btn-primary me-1"
            onClick={() => setModificar(true)}
          >
            Editar
          </button>
          <button type="button" className="btn btn-danger ms-1">
            Eliminar
          </button>
        </div>
      </div>
      {/* <ModalEditar nombre={nonbreRef} /> */}
    </>
  );
};

export default Platillo;
