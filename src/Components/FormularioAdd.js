import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
const FormularioAdd = ({ dispatch }) => {
    const [data, setData] = useState({ nombre: "", numero: "" });
    const { nombre, numero } = data;
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const actionAdd = {
        type: "add",
        payload: {
            id: uuidv4(),
            nombre,
            numero
        }
    }
    const handleAdd = () => {
        dispatch(actionAdd)
    }
    return (

        <div className="container">
            <label className="mx-1 d-grid gap-2" >
                Nombre:
                <input onChange={handleChange} name="nombre" value={nombre} type="text" className="form-control" autoComplete="off" placeholder="Ingrese su Nombre" />
            </label>
            <label className="mx-1 d-grid gap-2" >
                Numero:
                <input onChange={handleChange} name="numero" value={numero} type="text" className="form-control" autoComplete="off" placeholder="Ingrese su Numero" />
            </label>
            <div className="mx-1 d-grid gap-2">
                <button onClick={handleAdd} className="btn btn-info mt-2">Guardar</button>
            </div>
        </div>
    )
}

export default FormularioAdd
