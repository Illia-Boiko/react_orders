import React from 'react';
import PropTypes from 'prop-types';

import { Order } from './Order';
import { OrderType } from '../types/prop.tipes';

export function Orderslist({ orders }) {
  return (
    <div className="container">
      {orders.map(order => <Order key={order.id} order={order} />)}
    </div>
  );
}

Orderslist.propTypes = {
  orders: PropTypes.arrayOf(OrderType).isRequired,
};
