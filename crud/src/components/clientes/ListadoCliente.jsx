import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import BarraNav from "../BarraNav";
const urlClientes = "http://localhost:3100/clientes";



const ListadoCliente = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        mostrarClientes();
    }, []);

    const mostrarClientes = async () => {
        const res = await axios.get(urlClientes);
        setClientes(res.data);
        console.log(res.data);
    };

    const eliminarCliente = async (id) => {
        await axios.delete(`${urlClientes}/${id}`)
        mostrarClientes()
    }
    return (
        <section>
            <BarraNav />
            <h5 className="titulos-crud">Clientes SyS</h5>
            <section className="container mt-5">
                <table>
                    <thead>
                        <tr>
                            <th>Documento</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Teléfono</th>
                            <th>Correo</th>
                            <th>Barrio</th>
                            <th>Dirección</th>
                            <th>Foto</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente) => (
                            <tr>
                                <td>{cliente.documento}</td>
                                <td>{cliente.nombre}</td>
                                <td>{cliente.apellido}</td>
                                <td>{cliente.telefono}</td>
                                <td>{cliente.correo}</td>
                                <td>{cliente.barrio}</td>
                                <td>{cliente.direccion}</td>
                                <td>
                                    <img src={`${cliente.foto}`} alt="foto" />
                                </td>
                                <td>
                                    <button onClick={() => eliminarCliente(cliente.id)} className="btn form-control bg-warning" >Eliminar</button>
                                    <Link to={`/editarCliente/${cliente.id}`} className="btn form-control mt-2 bg-secondary">Editar</Link>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <Link to={'/crearCliente'} className="crear" >Ingresar Cliente</Link>
                </div>
            </section>
        </section>
    )
}

export default ListadoCliente