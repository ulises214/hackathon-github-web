import { useState, useEffect } from "react";
import Platillo from "./Platillo";

const Modificar = ({ nombre, precio, descripcion, img, tiempo }) => {
  const [platillo, setPlatillo] = useState(false);
  const [name, setNombre] = useState("");
  const [description, setDescripcion] = useState("");
  const [estimatedTime, setTiempo] = useState("");
  const [price, setPrecio] = useState("");
  const [imagen, setImg] = useState("");

  useEffect(() => {
    setNombre(nombre);
    setPrecio(precio);
    setDescripcion(descripcion);
    setTiempo(tiempo);
  }, []);

  const handleGuardar = () => {
    console.log(name, description, estimatedTime, price, imagen);
  };

  if (platillo) {
    return (
      <Platillo
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
      <div>
        {/* {nombre} */}
        <input
          type="text"
          className="form-control mt-2"
          onChange={(e) => setNombre(e.target.value)}
          defaultValue={nombre}
        />
      </div>
      <div>
        <input
          type="text"
          className="form-control mt-2"
          defaultValue={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          className="form-control mt-2"
          defaultValue={tiempo}
          onChange={(e) => setTiempo(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          className="form-control mt-2"
          defaultValue={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
      </div>
      <div>
        <input
          type="file"
          className="form-control mt-2"
          onChange={(e) => setImg(e.target.value)}
        />
      </div>
      <div>
        <button
          type="button"
          className="btn btn-danger mt-3"
          onClick={() => setPlatillo(true)}
        >
          Cancelar
        </button>
        <button
          type="button"
          className="btn btn-success mt-3 ms-2"
          onClick={handleGuardar}
        >
          Guardar
        </button>
      </div>
    </>
  );
};

export default Modificar;
