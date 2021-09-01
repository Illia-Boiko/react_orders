import PropTypes from 'prop-types';

export const UserType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

export const ProductType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  order: PropTypes.number,
});

export const OrderType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  user: UserType.isRequired,
  products: PropTypes.arrayOf(ProductType),
});
