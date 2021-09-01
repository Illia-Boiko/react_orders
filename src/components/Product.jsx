import React from 'react';
import { ProductType } from '../types/prop.tipes';

export function Product({ product }) {
  return (
    <>
      {product.name}
    </>
  );
}

Product.propTypes = {
  product: ProductType.isRequired,
};
