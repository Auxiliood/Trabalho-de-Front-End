import React from 'react';

export default function Orders({ orders }) {
  if (orders.length === 0) {
    return <p>Não há pedidos no carrinho.</p>;
  }

  const total = orders.reduce((acc, order) => acc + parseFloat(order.preco), 0);

  return (
    <div className="orders-container">
      <h2>Lista de Pedidos</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            <p><strong>{order.nome}</strong></p>
            <p>Preço: R${order.preco}</p>
          </li>
        ))}
      </ul>
      <div className="total">
        <p><strong>Total: R${total.toFixed(2)}</strong></p> 
      </div>
    </div>
  );
}