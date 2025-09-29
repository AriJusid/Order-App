import { useState } from "react";
import { useNavigate } from "react-router-dom";


const pedidos = [
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

  
  const filtros = {
    pending: "Pending",
    shipped: "Shipped",
    delivered: "Delivered",
  };
  
  function getStats(pedidos) {
    const stats = { total: pedidos.length, pending: 0, shipped: 0, delivered: 0 };
    pedidos.forEach((p) => {
      stats[p.status.toLowerCase()]++;
    });
    return stats;
  }
  
  export default function Dashboard() {
    const [filtro, setFiltro] = useState("all");
    const stats = getStats(pedidos);
    const navigate = useNavigate();

    const filteredOrders =
      filtro === "all" ? pedidos : pedidos.filter((o) => o.status.toLocaleLowerCase() === filtro);
    return (
      <div style={{
        maxWidth: 500,
        margin: "2rem auto",
        fontFamily: "system-ui, sans-serif",
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 2px 8px #eee",
        padding: "2rem"
      }}>
        <h2 style={{ margin: 0, marginBottom: "1.5rem", fontWeight: 500 }}>Order list</h2>
        <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
          <button
            style={filtro === "all" ? activeBtn : btn}
            onClick={() => setFiltro("all")}
          ><text style={{
            marginRight: "1rem"}}>{stats.total}</text>All</button>
          <button
            style={filtro === "pending" ? activeBtn : btn}
            onClick={() => setFiltro("pending")}
          ><text style={{
            marginRight: "1rem"}}>{stats.pending}</text>Pending</button>
          <button
            style={filtro === "shipped" ? activeBtn : btn}
            onClick={() => setFiltro("shipped")}
          ><text style={{
            marginRight: "1rem"}}>{stats.shipped}</text>Shipped</button>
          <button
            style={filtro === "delivered" ? activeBtn : btn}
            onClick={() => setFiltro("delivered")}
          ><text style={{
            marginRight: "1rem"}}>{stats.delivered}</text>Delivered</button>
        </div>        
  
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {filteredOrders.length === 0 ? (
            <li style={{ color: "#aaa", textAlign: "center" }}>No orders yet</li>
          ) : filteredOrders.map((pedido) => (
            <li
              key={pedido.id}
              style={{
                padding: "0.7rem 0",
                borderBottom: "1px solid #eee",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
              onClick={() => navigate(`/order`, { state: { pedido } })}

            >
              <span>{pedido.cliente}</span>
              <span style={{
                fontSize: "0.87em",
                color: "#888",
                background: "#f4f4f4",
                borderRadius: 4,
                padding: "2px 8px"
              }}>
                {pedido.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  // Styles
  const btn = {
    background: "#f8f8f8",
    color: "#444",
    border: "none",
    padding: "6px 14px",
    borderRadius: 5,
    cursor: "pointer",
    fontSize: "1em"
  };
  
  const activeBtn = {
    ...btn,
    background: "#222",
    color: "#fff"
  };