import { Link } from "react-router-dom"
import card1 from '../imagenes/card1.jpg'
import card2 from '../imagenes/card2.webp'
import card3 from '../imagenes/card3.jpeg'
const Cards = () => {
    return (
        <section contenedor-card gap-2>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-3 mb-5">
                <div className="col">
                    <div className="card h-100">
                        <img src={card1} class="card-img-top" height={375} alt="..." />
                        <div className="card-body">
                            <h5 className="subtitulos">Ofrecemos</h5>
                            <p className="card-text mt-4">
                                <ul>
                                    <li>Manicure y pedicure (tradicional)</li>
                                    <li>Extensión de uñas acrílicas</li>
                                    <li>Venta de productos</li>
                                    <li>Decoración a mano alzada</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={card2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="subtitulos">Horarios</h5>
                            <p className="card-text">
                                Lunea a viernes: De 8:00am hasta 7:00pm <br />
                                Sábados y feriados: De 10:00am hasta 2:00pm
                            </p>
                        </div>
                        <Link to={"/crearCita"} className="agenCita">Agenda tu cita</Link>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={card3} class="card-img-top" height={380} alt="..." />
                        <div className="card-body">
                            <h5 className="subtitulos">Sedes</h5>
                            <p className="card-text">
                                <ul>
                                    <li>SyS ARKADIA <br /> Carrera 70 # 1 -141 Local 0412 MEDELLÍN</li>
                                    <li>SyS EL TESORO <br /> Carrera 25A # 1A sur -45 Local 3181MEDELLÍN</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards