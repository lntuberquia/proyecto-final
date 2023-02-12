import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import BarraNav from "../BarraNav";
const urlCitas = "http://localhost:3100/citas";



const ListadoCita = () => {
    const [citas, setCitas] = useState([]);

    useEffect(() => {
        mostrarCitas();
    }, []);

    const mostrarCitas = async () => {
        const res = await axios.get(urlCitas);
        setCitas(res.data);
        console.log(res.data);
    };

    const eliminarCita = async (id) => {
        await axios.delete(`${urlCitas}/${id}`)
        mostrarCitas()
    }
    return (
        <section>
            <BarraNav />
            <h5 className="titulos-crud">Citas programadas</h5>
            <section className="container mt-5">
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Lugar</th>
                        <th>Nombre de servicio</th>
                        <th>Descripción de servicio</th>
                        <th>Imagen de cliente</th>
                        <th>Direccion de cliente</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {citas.map((cita) => (
                        <tr>
                            <td>{cita.fecha}</td>
                            <td>{cita.lugar}</td>
                            <td>{cita.nombreServicio}</td>
                            <td>{cita.descripcionServicio}</td>
                            <td>
                                <img src={`${cita.imgCliente}`} alt="foto del cliente" />
                            </td>
                            <td>{cita.direccionCliente}</td>
                            <td>
                                <button onClick={() => eliminarCita(cita.id)} className="btn form-control bg-warning" >Eliminar</button>
                                <Link to={`/editarCita/${cita.id}`} className="btn form-control mt-2 bg-secondary">Editar</Link>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <div className="d-grid gap-2 col-6 mx-auto">
                <Link to={'/crearCita'} className="crear" >Ingresar Cita</Link>
            </div>
        </section>
        </section>
    )
}

export default ListadoCita