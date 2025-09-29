import { useLocation } from "react-router-dom";


export default function Order() {
    const location = useLocation();
    const { pedido } = location.state || {};    
    
  return (
    <div style={styles.container}>
      <div style={styles.header}>Detailed Order</div>

      <div style={styles.infoRow}>
        <span style={styles.label}>ID:</span>
        <span style={styles.value}>{pedido.id}</span>
      </div>
      <div style={styles.infoRow}>
        <span style={styles.label}>Client:</span>
        <span style={styles.value}>{pedido.cliente}</span>
      </div>
      <div style={styles.infoRow}>
        <span style={styles.label}>Date:</span>
        <span style={styles.value}>{pedido.fecha}</span>
      </div>
      <div style={styles.infoRow}>
        <span style={styles.label}>Status:</span>
        <span style={styles.value}>{pedido.status}</span>
      </div>

      <div style={styles.productList}>
        <div style={{ ...styles.label, marginBottom: "10px" }}>
          Products:
        </div>
        {pedido.productos?.length === 0 && (
          <div style={{ color: "#999", fontSize: "0.95em" }}>No products yet.</div>
        )}
        {pedido.productos?.map((prod, idx) => (
          <div key={idx} style={styles.productItem}>
            <span style={styles.productName}>{prod.nombre}</span>
            <span style={styles.productQty}>
              x{prod.cantidad}
            </span>
            <span style={styles.productPrice}>
              ${prod.precio.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "480px",
    margin: "40px auto",
    padding: "32px",
    background: "#fff",
    borderRadius: "18px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    fontFamily: "Inter, sans-serif",
    color: "#222",
  },
  header: {
    marginBottom: "18px",
    fontWeight: 600,
    fontSize: "1.3em",
    letterSpacing: "0.02em",
    borderBottom: "1px solid #eee",
    paddingBottom: "10px",
  },
  infoRow: {
    marginBottom: "8px",
    fontSize: "1em",
    display: "flex",
    justifyContent: "space-between",
  },
  label: {
    fontWeight: 500,
    color: "#666",
  },
  value: {
    fontWeight: 400,
    color: "#222",
  },
  productList: {
    marginTop: "18px",
    borderTop: "1px solid #eee",
    paddingTop: "14px",
  },
  productItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    fontSize: "0.98em",
  },
  productName: {
    fontWeight: 500,
  },
  productPrice: {
    fontWeight: 400,
    color: "#444",
    marginLeft: "8px",
  },
  productQty: {
    color: "#888",
    marginLeft: "8px",
    fontSize: "0.93em",
  },
};