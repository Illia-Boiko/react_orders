import React from 'react';
import PropTypes from 'prop-types';
import { ProductType } from '../types/prop.tipes';
import { Product } from './Product';

export function ProductList({ products }) {
  return (
    <ul className="ui list">
      {products.map(product => (
        <li key={product.id}>
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(ProductType).isRequired,
};
