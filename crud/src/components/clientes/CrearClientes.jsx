import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const urlClientes = "http://localhost:3100/clientes";

const CrearClientes = () => {
  const [documento, setDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [barrio, setBarrio] = useState("");
  const [direccion, setDireccion] = useState("");
  const [foto, setFoto] = useState("");
  const navigate = useNavigate();

  const crearCliente = async (e) => {
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
    await axios.post(urlClientes, cliente);
    navigate('/listadoCliente')
  };

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
      <button onClick={crearCliente} className="btn btn-light form-control">Guardar</button>
  
    </section>
  );
};

export default CrearClientes;