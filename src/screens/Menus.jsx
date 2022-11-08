import React from 'react'
import { platillos } from '../assets/test/platilos'
import Platillo from '../components/Platillo'

const Menus = () => {
    return (
        <>
            <div className='container-fluid'>
                <div>
                    <label className='h1'>Platillos</label>
                    <button type="button" className="btn btn-success ms-2">+</button>
                </div>
                <div className='row mt-4 justify-content-center'>
                    {platillos.map((platillo, key) => {
                        return (
                            <div className='col-4 pt-2' key={key}>
                                <Platillo
                                    id={platillo.id}
                                    nombre={platillo.name}
                                    descripcion={platillo.description}
                                    precio={`$${platillo.price}`}
                                    img={platillo.imagen}
                                    tiempo={platillo.estimatedTime}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Menus