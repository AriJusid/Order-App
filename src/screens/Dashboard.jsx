import { useState } from "react";
import { useNavigate } from "react-router-dom";


const pedidos = [
    { id: 1, name: "Pedido #1", status: "pending" },
    { id: 2, name: "Pedido #2", status: "shipped" },
    { id: 3, name: "Pedido #3", status: "delivered" },
    { id: 4, name: "Pedido #4", status: "pending" },
  ];
  
  const filtros = {
    pending: "Pending",
    shipped: "Shipped",
    delivered: "Delivered",
  };
  
  function getStats(pedidos) {
    const stats = { total: pedidos.length, pending: 0, shipped: 0, delivered: 0 };
    pedidos.forEach((o) => {
      stats[o.status]++;
    });
    return stats;
  }
  
  export default function Dashboard() {
    const [filtro, setFiltro] = useState("all");
    const stats = getStats(pedidos);
    const navigate = useNavigate();

    onClick={() => navigate(`/events`)}
    const filteredOrders =
      filtro === "all" ? pedidos : pedidos.filter((o) => o.status === filtro);
  
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
            <li style={{ color: "#aaa", textAlign: "center" }}>Sin pedidos</li>
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
            >
              <span>{pedido.name}</span>
              <span style={{
                fontSize: "0.87em",
                color: "#888",
                background: "#f4f4f4",
                borderRadius: 4,
                padding: "2px 8px"
              }}>
                {filtros[pedido.status]}
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