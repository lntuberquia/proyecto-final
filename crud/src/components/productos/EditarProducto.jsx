import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const urlProductos = "http://localhost:3100/productos";

const EditarProducto = () => {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [valor, setValor] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [fotoProducto, setFotoProducto] = useState("");
    const { id } = useParams()

    const actualizarProducto = async (e) => {
        e.preventDefault()
        const producto = {
            nombre,
            descripcion,
            valor,
            cantidad,
            fotoProducto
        };
        await axios.put(`${urlProductos}/${id}`, producto);
        navigate('/listadoProducto')
    };

    const listarProducto = async () => {
        const res = await axios.get(`${urlProductos}/${id}`)
        setNombre(res.data.nombre)
        setDescripcion(res.data.descripcion)
        setValor(res.data.valor)
        setCantidad(res.data.cantidad)
        setFotoProducto(res.data.fotoProducto)
    }

    useEffect(() => {
        listarProducto()
    }, [])

    return (
        <section className="formulario">
            <input
                className="inputs"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
                type="text"
                placeholder="Nombre"
            />
            <input
                className="inputs"
                onChange={(e) => setDescripcion(e.target.value)}
                value={descripcion}
                type="text"
                placeholder="Descripción"
            />
            <input
                className="inputs"
                onChange={(e) => setValor(e.target.value)}
                value={valor}
                type="text"
                placeholder="Valor"
            />
            <input
                className="inputs"
                type="text"
                onChange={(e) => setCantidad(e.target.value)}
                value={cantidad}
                placeholder="Cantidad"
            />
            <input
                className="inputs"
                onChange={(e) => setFotoProducto(e.target.value)}
                value={fotoProducto}
                type="date"
                placeholder="Foto del producto"
            />

            <Link to={"/listadoProducto"} className="btn btn-dark form-control mb-2">
                Cancelar
            </Link>
            <button onClick={actualizarProducto} className="btn btn-light form-control">Actualizar</button>
        </section>
    );
};

export default EditarProducto;