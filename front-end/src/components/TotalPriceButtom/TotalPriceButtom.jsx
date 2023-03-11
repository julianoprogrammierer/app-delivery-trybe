import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

import { Button, CartButtonWrapper } from './totalPriceButtom.style';

function CartButton({ totalPrice, buttonText, route }) {
  const navigate = useNavigate();

  const formattedPrice = Number(totalPrice.replace(',', '.')).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <CartButtonWrapper>
      <Button
        onClick={ () => navigate(route) }
        disabled={ Number(totalPrice.replace(',', '.')) < 1 }
        data-testid="customer_products__button-cart"
      >
        {`${buttonText} ${formattedPrice}`}
      </Button>
    </CartButtonWrapper>
  );
}

CartButton.propTypes = {
  totalPrice: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default CartButton;
