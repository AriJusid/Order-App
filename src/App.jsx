import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './screens/Dashboard'
import OrderItem from './screens/OrderItem'
import Form from './screens/Form'
import { useState } from 'react'
import './App.css'

const initialPedidos = [
  {
    id: 1,
    cliente: "Lucía Martínez",
    fecha: "2025-09-20",
    status: "Pending",
    productos: [
      { nombre: "Pan de campo", cantidad: 2, precio: 180 },
      { nombre: "Medialunas", cantidad: 6, precio: 60 },
      { nombre: "Budín de limón", cantidad: 1, precio: 350 }
    ]
  },
  {
    id: 2,
    cliente: "Carlos Gómez",
    fecha: "2025-09-18",
    status: "Shipped",
    productos: [
      { nombre: "Tarta de manzana", cantidad: 1, precio: 500 },
      { nombre: "Facturas surtidas", cantidad: 12, precio: 720 }
    ]
  },
  {
    id: 3,
    cliente: "Ana Rodríguez",
    fecha: "2025-09-15",
    status: "Delivered",
    productos: [
      { nombre: "Pan integral", cantidad: 1, precio: 200 },
      { nombre: "Croissants", cantidad: 4, precio: 80 },
      { nombre: "Brownies", cantidad: 2, precio: 250 },
      { nombre: "Alfajores de maicena", cantidad: 6, precio: 60 }
    ]
  },
  {
    id: 4,
    cliente: "Mariano Torres",
    fecha: "2025-09-25",
    status: "Pending",
    productos: [
      { nombre: "Churros rellenos", cantidad: 4, precio: 90 },
      { nombre: "Pan brioche", cantidad: 1, precio: 300 },
      { nombre: "Donas", cantidad: 3, precio: 100 }
    ]
  }
];

function App() {
  const [pedidos, setPedidos] = useState(initialPedidos);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Dashboard pedidos={pedidos} setPedidos={setPedidos} />
        } />
        <Route path="/order" element={<OrderItem />} />
        <Route path="/form" element={
          <Form
            onAddPedido={pedido => {
              setPedidos(prev => [...prev, pedido]);
            }}
          />
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App