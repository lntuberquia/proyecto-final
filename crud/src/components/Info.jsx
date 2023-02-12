import imgInfo from '../imagenes/img3.webp'

const Info = () => {
    return (
        <section>
            <div className="container text-center mt-4 p-5">
                <div className="row justify-content-evenly">
                    <div className="col-4">
                        <h3 className="subtitulos">SOBRE NOSOTROS</h3>
                        <p className='texto'>En los servicios que ofrecemos en nuestras sedes, encuentras desde el más clásico hasta el moderno; ofreciendo así, un servicio completo para que puedas consentirte.</p>
                    </div>
                    <div className="col-4">
                        <img src={imgInfo} id="imagenInfo" width={300} alt="" />
                    </div>
                </div>
            </div>
            <div className="row justify-content-evenly mt-5">
                    <div className="col-4 p-3">
                        <h3 className="subtitulos">MISIÓN</h3>
                        <p className='texto'>Posicionar nuestra marca como la mejor opción de nuestros clientes para alcanzar una  óptima atención  y cuidado de sus necesidades, con la promoción de un estilo de vida donde vayan en armonía cuerpo.</p>
                    </div>
                    <div className="col-4 p-3">
                        <h3 className="subtitulos">VISIÓN</h3>
                        <p className='texto'>Brindar atención y asesoría a nuestros clientes con la mejor calidad, contando con un personal capacitado en las distintas áreas, orientado a satisfacer todas sus necesidades y expectativas.</p>
                    </div>
                </div>
        </section>
    )
}

export default Info