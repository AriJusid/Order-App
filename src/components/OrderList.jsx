import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderList = ({pedidos}) => {

// const filtros = {
//     pending: "Pending",
//     shipped: "Shipped",
//     delivered: "Delivered",
//   };
  
  
    const [filtro, setFiltro] = useState("all");
    const navigate = useNavigate();

    const filteredOrders =
      filtro === "all" ? pedidos : pedidos.filter((o) => o.status.toLocaleLowerCase() === filtro);

    return (
      <>
               
  
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
        </>
    );
  }

  export default  OrderList
