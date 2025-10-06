import { useState } from "react";

const OrderStats = ({stats, filtro, setFiltro}) => {
  return(
    <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
      <button style={filtro === "all" ? activeBtn : btn} onClick={() => setFiltro("all")}>
        <text style={{marginRight: "1rem"}}>{stats.total}</text>All
      </button>
      <button style={filtro === "pending" ? activeBtn : btn} onClick={() => setFiltro("pending")}>
        <text style={{marginRight: "1rem"}}>{stats.pending}</text>Pending
      </button>
      <button style={filtro === "shipped" ? activeBtn : btn} onClick={() => setFiltro("shipped")}>
        <text style={{marginRight: "1rem"}}>{stats.shipped}</text>Shipped
      </button>
      <button style={filtro === "delivered" ? activeBtn : btn} onClick={() => setFiltro("delivered")}>
        <text style={{marginRight: "1rem"}}>{stats.delivered}</text>Delivered
      </button>
    </div> 
  );
};


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
 
 export default OrderStats
