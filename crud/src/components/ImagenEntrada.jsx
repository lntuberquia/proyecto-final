import imagen1 from '../imagenes/img1.jpg'
const ImagenEntrada = () => {
    return (
        <div className="carousel-inner">
                <img src={imagen1} className="d-block w-100" alt="imagen1" />
                <div className="carousel-caption d-none d-md-block bg bg-dark">
                    <h5>Servicio de mantenimiento de uñas</h5>
                </div>
        </div>
    )
}

export default ImagenEntrada