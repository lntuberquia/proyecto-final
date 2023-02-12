import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const urlCitas = "http://localhost:3100/citas";

const EditarCita = () => {
    const [fecha, setFecha] = useState("");
    const [lugar, setLugar] = useState("");
    const [nombreServicio, setNombreServicio] = useState("");
    const [descripcionServicio, setDescripcionServicio] = useState("");
    const [imgCliente, setImgCliente] = useState("");
    const [direccionCliente, setDireccionCliente] = useState("");
    const { id } = useParams()

    const actualizarCita = async (e) => {
        e.preventDefault()
        const cita = {
            fecha,
            lugar,
            nombreServicio,
            descripcionServicio,
            imgCliente,
            direccionCliente
        };
        await axios.put(`${urlCitas}/${id}`, cita);
        navigate('/listadoCita')
    };

    const listarCita = async () => {
        const res = await axios.get(`${urlCitas}/${id}`)
        setFecha(res.data.fecha)
        setLugar(res.data.lugar)
        setNombreServicio(res.data.nombreServicio)
        setDescripcionServicio(res.data.descripcionServicio)
        setImgCliente(res.data.imgCliente)
        setDireccionCliente(res.data.direccionCliente)
    }

    useEffect(() => {
        listarCita()
    }, [])

    return (
        <section className="formulario">
            <input
                className="inputs"
                onChange={(e) => setFecha(e.target.value)}
                value={fecha}
                type="date"
                placeholder="Fecha de la cita"
            />
            <input
                className="inputs"
                onChange={(e) => setLugar(e.target.value)}
                value={lugar}
                type="text"
                placeholder="Lugar de la cita"
            />
            <input
                className="inputs"
                onChange={(e) => setNombreServicio(e.target.value)}
                value={nombreServicio}
                type="text"
                placeholder="Nombre del Servicio"
            />
            <input
                className="inputs"
                type="text"
                onChange={(e) => setDescripcionServicio(e.target.value)}
                value={descripcionServicio}
                placeholder="Descripcion del Servicio"
            />
            <input
                className="inputs"
                onChange={(e) => setImgCliente(e.target.value)}
                value={imgCliente}
                type="file"
                placeholder="Imagen del Cliente"
            />
            <input
                className="inputs"
                onChange={(e) => setDireccionCliente(e.target.value)}
                value={direccionCliente}
                type="text"
                placeholder="Direccion del Cliente"
            />

            <Link to={"/listadoCita"} className="btn btn-dark form-control mb-2">
                Cancelar
            </Link>
            <button onClick={actualizarCita} className="btn btn-light form-control">Actualizar</button>
        </section>
    );
};

export default EditarCita;