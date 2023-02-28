import React from 'react';
import PropTypes from 'prop-types';
import ProductsTotalStyled from './styles';

function ProductsTotal({ totalPrice }) {
  if (totalPrice === undefined) {
    totalPrice = 0;
  }
  const formatPrice = (price) => {
    const [wholePrice, cents] = price.toFixed(2).split('.');
    return (
      <>
        <span className="price">{wholePrice}</span>
        <span className="cents">{cents}</span>
      </>
    );
  };
  return (
    <ProductsTotalStyled>
      <p>
        Total R$:
        {formatPrice(totalPrice)}
      </p>
    </ProductsTotalStyled>
  );
}

ProductsTotal.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};

export default ProductsTotal;
