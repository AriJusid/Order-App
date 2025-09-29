
import OrderList from "../components/OrderList";
import OrderStats from "../components/OrderStats";

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

  export default function Dashboard() {

    function getStats(pedidos) {
      const stats = { total: pedidos.length, pending: 0, shipped: 0, delivered: 0 };
      pedidos.forEach((p) => {
        stats[p.status.toLowerCase()]++;
      });
      return stats;
    }
    const stats = getStats(pedidos);

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
        <h2 style={{ margin: 0, marginBottom: "1.5rem", fontWeight: 500 }}>Order list</h2>

        <OrderStats stats={stats}></OrderStats>
        <OrderList pedidos={pedidos}></OrderList>
    </div>
    </>
    )
   }