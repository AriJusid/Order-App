
import OrderFilter from "../components/OrderFilter";
import OrderStats from "../components/OrderStats";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Dashboard({ pedidos, setPedidos }) {
  const navigate = useNavigate();

  function getStats(pedidos) {
    const stats = { total: pedidos.length, pending: 0, shipped: 0, delivered: 0 };
    pedidos.forEach((p) => {
      stats[p.status.toLowerCase()]++;
    });
    return stats;
  }
  const stats = getStats(pedidos);
  const [filtro, setFiltro] = useState("all");

  return(
    <>
    <div style={{
      maxWidth: 500,
      margin: "2rem auto",
      fontFamily: "system-ui, sans-serif",
      background: "#fff",
      borderRadius: 8,
      boxShadow: "0 2px 8px #eee",
      padding: "2rem"
    }}>
      <h2>Order list</h2>
      <OrderStats stats={stats} filtro={filtro} setFiltro={setFiltro} />
      <OrderFilter filtro={filtro} pedidos={pedidos} />
    </div>
    <button
    onClick={() => navigate("/form")}
    style={{
      position: "fixed",
      bottom: "32px",
      right: "32px",
      background: "#646cff",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      fontSize: "2em",
      boxShadow: "0 2px 8px #aaa",
      cursor: "pointer",
      zIndex: 1000
    }}
    aria-label="Crear pedido"
  >
    +
  </button>
  </>
  )
}


  