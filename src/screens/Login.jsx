import { useState } from "react"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        console.log(email, password)
    }

    return (
        <>
            <div className="container text-center">
                <div className='p-4' style={{ backgroundColor: '#7b7d8e', borderRadius: 10 }}>
                    <h1 className='pt-3' style={{ color: 'white' }}>Login</h1>
                    <div className='mt-4 text-start'>
                        <label className='form-label pt-2 pb-1' style={{ color: 'white' }}>Usuario</label>
                        <input type="text" placeholder="Usuario" className='form-control' onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className='mt-4 text-start'>
                        <label className='form-label pt-2 pb-1' style={{ color: 'white' }}>Contraseña</label>
                        <input type="password" placeholder="Contraseña" className='form-control' onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <button type='button' className='btn mt-5' style={{
                        backgroundColor: '#0071ff',
                        color: 'white',
                    }}
                        onClick={handleLogin}
                    >
                        Iniciar Sesión
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login