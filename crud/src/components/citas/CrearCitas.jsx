import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const urlCitas = "http://localhost:3100/citas";

const CrearCitas = () => {
  const [fecha, setFecha] = useState("");
  const [lugar, setLugar] = useState("");
  const [nombreServicio, setNombreServicio] = useState("");
  const [descripcionServicio, setDescripcionServicio] = useState("");
  const [imgCliente, setImgCliente] = useState("");
  const [direccionCliente, setDireccionCliente] = useState("");
  const navigate = useNavigate();

  const crearCita = async (e) => {
    e.preventDefault()
    const cita = {
      fecha,
      lugar,
      nombreServicio,
      descripcionServicio,
      imgCliente,
      direccionCliente
    };
    await axios.post(urlCitas, cita);
    navigate('/listadoCita')
  };

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
      <button onClick={crearCita} className="btn btn-light form-control">Guardar</button>
  
    </section>
  );
};

export default CrearCitas;