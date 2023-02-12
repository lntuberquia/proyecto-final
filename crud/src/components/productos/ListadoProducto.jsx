import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import BarraNav from "../BarraNav";
import Footer from "../Footer";
const urlProductos = "http://localhost:3100/productos";



const ListadoProducto = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        mostrarProductos();
    }, []);

    const mostrarProductos = async () => {
        const res = await axios.get(urlProductos);
        setProductos(res.data);
        console.log(res.data);
    };

    const eliminarProducto = async (id) => {
        await axios.delete(`${urlProductos}/${id}`)
        mostrarProductos()
    }
    return (
        <section>
            <BarraNav />
            <h5 className="titulos-crud">Productos</h5>
            <section className="container mt-5">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Valor</th>
                        <th>Cantidad</th>
                        <th>Imagen del producto</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr>
                            <td>{producto.nombre}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.valor}</td>
                            <td>{producto.cantidad}</td>
                            <td>
                                <img src={`${producto.imagenProducto}`} alt="Foto del producto" />
                            </td>
                            <td>
                                <button onClick={() => eliminarProducto(producto.id)} className="btn form-control bg-warning" >Eliminar</button>
                                <Link to={`/editarProducto/${producto.id}`} className="btn form-control mt-2 bg-secondary">Editar</Link>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <div className="d-grid gap-2 col-6 mx-auto">
                <Link to={'/crearProducto'} className="crear" >Ingresar Producto</Link>
            </div>
        </section>
        </section>
    )
}

export default ListadoProducto