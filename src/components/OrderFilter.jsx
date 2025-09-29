import { useState } from "react";
import OrderList from './OrderList'

const OrderFilter = ({filtro, pedidos}) => {

// const filtros = {
//     pending: "Pending",
//     shipped: "Shipped",
//     delivered: "Delivered",
//   };

    const filteredOrders =
      filtro === "all" ? pedidos : pedidos.filter((o) => o.status.toLocaleLowerCase() === filtro);

    return (
      <>   
        <OrderList pedidos= {filteredOrders}></OrderList>
      </>
    );
  }
  
  export default  OrderFilter
