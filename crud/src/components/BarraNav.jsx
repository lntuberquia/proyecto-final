import { Link } from "react-router-dom"

const BarraNav = () => {
    return (
        <section className="container-fluid bg-light">
            <nav className="navbar navbar-expand-lg bg-body-">
                <div className="container-fluid">
                    <Link to ={'/'} className="navbar-brand">AppSyS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to ={'/'} className="nav-link active" aria-current="page">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ={'/listadoCliente'} className="nav-link">Clientes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ={'/listadoProducto'} className="nav-link">Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ={'/listadoCita'} className="nav-link">Citas</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default BarraNav