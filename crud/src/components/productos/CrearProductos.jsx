import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const urlProductos = "http://localhost:3100/productos";

const CrearProductos = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [valor, setValor] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [imagenProducto, setImagenProducto] = useState("");
  const navigate = useNavigate();

  const crearProducto = async (e) => {
    e.preventDefault()
    const producto = {
      nombre,
      descripcion,
      valor,
      cantidad,
      imagenProducto,
    };
    await axios.post(urlProductos, producto);
    navigate('/listadoProducto')
  };

  return (
    <section className="formulario">
      <input
        className="inputs"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
        type="text"
        placeholder="Nombre del producto"
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
        onChange={(e) => setImagenProducto(e.target.value)}
        value={imagenProducto}
        type="file"
        placeholder="Foto del producto"
      />

      <Link to={"/listadoProducto"} className="btn btn-dark form-control mb-2">
        Cancelar
      </Link>
      <button onClick={crearProducto} className="btn btn-light form-control">Guardar</button>
  
    </section>
  );
};

export default CrearProductos;