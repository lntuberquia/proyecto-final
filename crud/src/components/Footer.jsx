const Footer = () => {
    return (
        <section className='contenedor-foot'>
            <h5>Contactanos</h5>
            <section className="red-social">
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-instagram"></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-youtube"></a>
            </section>
            <section className="contenedor-enlaces">
                <a href="" className="enlace-foot">Privacidad de datos</a>
                <a href="" className="enlace-foot">Nuestras Sedes</a>
                <a href="" className="enlace-foot">Agenda tu cita</a>
                <a href="" className="enlace-foot">PQRS</a>
            </section>
            <section className="info-dev">
                <p>
                    Laura Natalia Tuberquia <br />
                    Liliana Ines Martinez <br />
                    Número de contacto: 320 855 45 47
                </p>
            </section>
        </section>
    )
}

export default Footer