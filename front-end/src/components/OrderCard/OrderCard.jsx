import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer, OrderId, Status, SaleDate, Price } from './OrderCardStyles';

function OrderCard({ id, status, saleDate, totalPrice }) {
  const formattedPrice = `R$ ${totalPrice.replace('.', ',')}`;
  const formattedDate = new Date(saleDate).toLocaleDateString('pt-BR');

  return (
    <CardContainer>
      <div>
        <p>
          PEDIDO
          {' '}
          <OrderId data-testid={ `customer_orders__element-order-id-${id}` }>
            {`000${id}`}
          </OrderId>
        </p>
        <p data-testid={ `customer_orders__element-delivery-status-${id}` }>
          <Status>{status}</Status>
        </p>
        <p data-testid={ `customer_orders__element-order-date-${id}` }>
          <SaleDate>{formattedDate}</SaleDate>
        </p>
      </div>
      <Price data-testid={ `customer_orders__element-card-price-${id}` }>
        {formattedPrice}
      </Price>
    </CardContainer>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};

export default OrderCard;
