import gal1 from '../imagenes/gal1.jpg'
import gal2 from '../imagenes/gal2.jpg'
import gal3 from '../imagenes/gal3.jpg'
import gal4 from '../imagenes/gal4.webp'
import gal5 from '../imagenes/gal5.jpg'
import gal6 from '../imagenes/gal6.webp'
import gal7 from '../imagenes/gal7.jpg'
import gal8 from '../imagenes/gal8.webp'

const Galeria = () => {
    return (
        <section className='contenedor-galeria'>
            <h3 className='subtitulos pt-4 mb-4'>NUESTROS TRABAJOS</h3>
            <section className='rowgal'>
            <section className='column'>
                <img src={gal1} className="imgGaleria" width={180} lt="" />
                <img src={gal2} className="imgGaleria" width={200}alt="" />
            </section>
            <section className='column'>
                <img src={gal3} className="imgGaleria" width={200}alt="" />
                <img src={gal4} className="imgGaleria" width={200} alt="" />
            </section>
            <section className='column'>
                <img src={gal5} className="imgGaleria" width={200}alt="" />
                <img src={gal6} className="imgGaleria" width={200}alt="" />
            </section>
            <section className='column'>
                <img src={gal7} className="imgGaleria" width={200}alt="" />
                <img src={gal8} className="imgGaleria" width={200} alt="" />
            </section>
        </section>
        </section>
    )
}

export default Galeria