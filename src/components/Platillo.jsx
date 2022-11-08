import ModalEditar from "./modal/ModalEditar"
import { useRef } from "react"

const Platillo = ({ nombre, precio, descripcion, img, id, tiempo }) => {

    const imgRef = useRef(null)
    const nonbreRef = useRef(null)
    const precioRef = useRef(null)
    const descripcionRef = useRef(null)
    const tiempoRef = useRef(null)



    const handleEditar = () => {
        console.log(imgRef.current.src)
        console.log(nonbreRef.current.innerText)
        console.log(precioRef.current.innerText)
        console.log(descripcionRef.current.innerText)
        console.log(tiempoRef.current.innerText)
        const modal = document.getElementById('editar_platillo')
        modal.focus()
    }

    return (
        <>
            <div className="card">
                <img className="img fluid" defaultValue={img} src={img} alt={`imagen de ${nombre}`} ref={imgRef} />
                <div className="card-body">
                    <h5 className="card-title" ref={nonbreRef} defaultValue={nombre}>{nombre}</h5>
                    <label className="card-text" ref={descripcionRef}>{descripcion}</label>
                    <div className="card-text" ref={tiempoRef}>
                        <i className="bi bi-stopwatch me-1" />
                        {tiempo}
                    </div>
                    <p className="card-text" ref={precioRef}>{precio}</p>
                    {/* <button type="button" className="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#editar_platillo" onClick={handleEditar}>Editar</button> */}
                    <button type="button" className="btn btn-primary me-1" onClick={handleEditar}>Editar</button>
                    <button type="button" className="btn btn-warning ms-1" id={`btn_${id}`}>Eliminar</button>
                </div>
            </div>
            <ModalEditar />
        </>
    )
}

export default Platillo