import React from 'react';

import { ProductList } from './ProductList';
import { User } from './User';
import { OrderType } from '../types/prop.tipes';

export function Order({ order }) {
  const { title, user } = order;

  return (
    <div className="ui card">
      <div className="ui content">
        <div className="ui description">
          <p>
            {`${title} - `}
            <User user={user} />
          </p>
          {order.products.length
            ? <ProductList products={order.products} />
            : <p>No products found</p>}
        </div>
      </div>
    </div>
  );
}

Order.propTypes = {
  order: OrderType.isRequired,
};
