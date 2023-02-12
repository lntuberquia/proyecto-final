import { Link } from "react-router-dom"
import BarraNav from "./BarraNav"
import Cards from "./Cards"
import Footer from "./Footer"
import Galeria from "./Galeria"
import ImagenEntrada from "./ImagenEntrada"
import Info from "./Info"

const Home = () => {
  return (
    <section>
      <BarraNav />
      <ImagenEntrada />
      <Info />
      <Galeria />
      <Cards />
      <Footer />
    </section>
  )
}

export default Home