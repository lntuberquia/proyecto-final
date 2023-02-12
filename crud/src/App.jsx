import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CrearProductos from './components/productos/CrearProductos'
import ListadoProducto from './components/productos/ListadoProducto'
import EditarProducto from './components/productos/EditarProducto'
import ListadoCita from './components/citas/ListadoCita'
import CrearCitas from './components/citas/CrearCitas'
import EditarCita from './components/citas/EditarCita'
import ListadoCliente from './components/clientes/ListadoCliente'
import CrearClientes from './components/clientes/CrearClientes'
import EditarCliente from './components/clientes/EditarCliente'
import Home from './components/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/listadoProducto',
    element: <ListadoProducto />,
  },
  {
    path: '/crearProducto',
    element: <CrearProductos />,
  },
  {
    path: '/editarProducto/:id',
    element: <EditarProducto />,
  },
  {
    path: '/listadoCita',
    element: <ListadoCita />,
  },
  {
    path: '/crearCita',
    element: <CrearCitas />,
  },
  {
    path: '/editarCita/:id',
    element: <EditarCita />,
  },
  {
    path: '/listadoCliente',
    element: <ListadoCliente />,
  },
  {
    path: '/crearCliente',
    element: <CrearClientes />,
  },
  {
    path: '/editarCliente/:id',
    element: <EditarCliente />,
  }
])

function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  )
}

export default App
