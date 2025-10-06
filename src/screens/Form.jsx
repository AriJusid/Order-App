import { useState } from "react";
import { useNavigate } from "react-router-dom";

function getToday() {
  const today = new Date();
  return today.toISOString().substr(0, 10);
}

export default function Form({ onAddPedido }) {
  const [cliente, setCliente] = useState("");
  const [productos, setProductos] = useState([{ nombre: "", cantidad: 1, precio: 0 }]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function validate() {
    const newErrors = {};
    if (cliente.trim().length < 3) {
      newErrors.cliente = "Mínimo 3 caracteres.";
    }
    productos.forEach((prod, idx) => {
      if (prod.cantidad <= 0) {
        newErrors[`cantidad${idx}`] = "Cantidad > 0";
      }
      if (prod.nombre.trim().length === 0) {
        newErrors[`nombre${idx}`] = "Obligatorio";
      }
    });
    return newErrors;
  }

  const handleProductoChange = (idx, field, value) => {
    const nuevos = productos.map((prod, i) =>
      i === idx ? { ...prod, [field]: value } : prod
    );
    setProductos(nuevos);
  };

  const addProducto = () => {
    setProductos([...productos, { nombre: "", cantidad: 1, precio: 0 }]);
  };

  const removeProducto = (idx) => {
    setProductos(productos.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    const pedido = {
      id: Date.now(),
      cliente,
      fecha: getToday(),
      status: "Pending",
      productos: productos.filter(p => p.nombre.trim() !== ""),
    };
    if (onAddPedido) onAddPedido(pedido);
    setCliente("");
    setProductos([{ nombre: "", cantidad: 1, precio: 0 }]);
    setErrors({});
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} style={{
      maxWidth: 800,
      margin: "3rem auto",
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 2px 12px #eee",
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      gap: "1.4rem",
      alignItems: "center"
    }}>
      <h2 style={{
        margin: 0,
        marginBottom: "0.7rem",
        fontWeight: 600,
        fontSize: "1.3em",
        color: "#222",
        textAlign: "center"
      }}>
        Nuevo pedido
      </h2>
      <div style={{ width: "100%" }}>
        <input
          type="text"
          value={cliente}
          onChange={e => setCliente(e.target.value)}
          placeholder="Cliente"
          autoFocus
          required
          style={{
            width: "100%",
            fontSize: "1em",
            padding: "8px 12px",
            borderRadius: 7,
            border: "1px solid #eee",
            outline: "none",
            boxSizing: "border-box"
          }}
        />
        {errors.cliente && <div style={{ color: "#e44", fontSize: 13, marginTop: 4 }}>{errors.cliente}</div>}
      </div>
      <div style={{ width: "100%" }}>
        <label style={{ fontSize: ".97em", color: "#444", marginBottom: 4, display: "block" }}>Productos</label>
        <div style={{ display: "flex", gap: 0, marginBottom: 6 }}>
          <span style={{ flex: 2, fontSize: ".95em", color: "#999", marginLeft: 4 }}>Nombre</span>
          <span style={{ flex: 1, fontSize: ".95em", color: "#999", marginLeft: 12 }}>Cantidad</span>
          <span style={{ flex: 1, fontSize: ".95em", color: "#999", marginLeft: 12 }}>Precio</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {productos.map((prod, idx) => (
            <div key={idx} style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <input
                type="text"
                placeholder="Nombre"
                value={prod.nombre}
                onChange={e => handleProductoChange(idx, "nombre", e.target.value)}
                required
                style={{
                  flex: 2,
                  fontSize: "1em",
                  padding: "6px 8px",
                  borderRadius: 5,
                  border: "1px solid #eee"
                }}
              />
              {errors[`nombre${idx}`] && <span style={{ color: "#e44", fontSize: 12 }}>{errors[`nombre${idx}`]}</span>}
              <input
                type="number"
                min="1"
                placeholder="Cantidad"
                value={prod.cantidad}
                onChange={e => handleProductoChange(idx, "cantidad", Number(e.target.value))}
                required
                style={{
                  flex: 1,
                  fontSize: "1em",
                  padding: "6px 8px",
                  borderRadius: 5,
                  border: "1px solid #eee"
                }}
              />
              {errors[`cantidad${idx}`] && <span style={{ color: "#e44", fontSize: 12 }}>{errors[`cantidad${idx}`]}</span>}
              <input
                type="number"
                min="0"
                placeholder="Precio"
                value={prod.precio}
                onChange={e => handleProductoChange(idx, "precio", Number(e.target.value))}
                required
                style={{
                  flex: 1,
                  fontSize: "1em",
                  padding: "6px 8px",
                  borderRadius: 5,
                  border: "1px solid #eee"
                }}
              />
              <button
                type="button"
                onClick={() => removeProducto(idx)}
                disabled={productos.length === 1}
                style={{
                  background: "none",
                  border: "none",
                  color: "#888",
                  fontSize: "1.3em",
                  cursor: productos.length === 1 ? "not-allowed" : "pointer",
                  marginLeft: 4
                }}
                title="Eliminar"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addProducto}
          style={{
            marginTop: 10,
            background: "#f7f7fa",
            color: "#444",
            border: "none",
            borderRadius: 7,
            padding: "7px 18px",
            cursor: "pointer",
            fontSize: "1em",
            fontWeight: 500,
            marginLeft: 0
          }}
        >
          + producto
        </button>
      </div>
      <button
        type="submit"
        style={{
          marginTop: "1.4rem",
          background: "#222",
          color: "#fff",
          border: "none",
          borderRadius: 7,
          padding: "12px 0",
          width: "100%",
          fontSize: "1.07em",
          fontWeight: 600,
          cursor: "pointer",
          letterSpacing: ".04em"
        }}
      >
        Crear pedido
      </button>
    </form>
  );
}