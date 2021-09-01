import React from 'react';
import { Orderslist } from './components/Orderslist';

import './App.scss';

import users from './api/users.json';
import products from './api/products.json';
import orders from './api/orders.json';

const preparedOrders = orders.map(order => ({
  ...order,
  user: users.find(user => user.id === order.userId),
  products: products.filter(product => product.orderId === order.id),
}));

function App() {
  return (
    <Orderslist orders={preparedOrders} />
  );
}

export default App;
