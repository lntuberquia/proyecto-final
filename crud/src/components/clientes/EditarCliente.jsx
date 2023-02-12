import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const urlClientes = "http://localhost:3100/clientes";

const EditarCliente = () => {
    const [documento, setDocumento] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [barrio, setBarrio] = useState("");
    const [direccion, setDireccion] = useState("");
    const [foto, setFoto] = useState("");
    const { id } = useParams()

    const actualizarCliente = async (e) => {
        e.preventDefault()
        const cliente = {
            documento,
            nombre,
            apellido,
            telefono,
            correo,
            barrio,
            direccion,
            foto
        };
        await axios.put(`${urlClientes}/${id}`, cliente);
        navigate('/listadoCliente')
    };

    const listarCliente = async () => {
        const res = await axios.get(`${urlClientes}/${id}`)
        setDocumento(res.data.fecha)
        setNombre(res.data.fecha)
        setApellido(res.data.lugar)
        setTelefono(res.data.nombreServicio)
        setCorreo(res.data.descripcionServicio)
        setBarrio(res.data.imgCliente)
        setDireccion(res.data.fecha)
        setFoto(res.data.direccionCliente)
    }

    useEffect(() => {
        listarCliente()
    }, [])

    return (
        <section className="formulario">
            <input
                className="inputs"
                onChange={(e) => setDocumento(e.target.value)}
                value={documento}
                type="date"
                placeholder="Documento"
            />
            <input
                className="inputs"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
                type="text"
                placeholder="Nombre"
            />
            <input
                className="inputs"
                onChange={(e) => setApellido(e.target.value)}
                value={apellido}
                type="text"
                placeholder="Apellido"
            />
            <input
                className="inputs"
                type="text"
                onChange={(e) => setTelefono(e.target.value)}
                value={telefono}
                placeholder="Telefono"
            />
            <input
                className="inputs"
                onChange={(e) => setCorreo(e.target.value)}
                value={correo}
                type="text"
                placeholder="Correo"
            />
            <input
                className="inputs"
                onChange={(e) => setBarrio(e.target.value)}
                value={barrio}
                type="text"
                placeholder="Barrio"
            />
            <input
                className="inputs"
                onChange={(e) => setDireccion(e.target.value)}
                value={direccion}
                type="text"
                placeholder="Direccion"
            />
            <input
                className="inputs"
                onChange={(e) => setFoto(e.target.value)}
                value={foto}
                type="file"
                placeholder="Foto"
            />

            <Link to={"/listadoCliente"} className="btn btn-dark form-control mb-2">
                Cancelar
            </Link>
            <button onClick={actualizarCliente} className="btn btn-light form-control">Actualizar</button>
        </section>
    );
};

export default EditarCliente;