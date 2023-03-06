import React, { useEffect, useState } from 'react';
import {
  saveUserProductListToCheckout,
  getUserProductListToCheckout,
} from '../../Context/LocalStorage';
import ProductsTotal from '../ProductsTotal';
import CheckoutContainer from './styles';

export default function CheckoutProducts() {
  const [checkoutList, setCheckoutList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const removeItem = (product) => {
    const indexMatch = checkoutList.indexOf(product);
    const newCheckoutList = [...checkoutList];
    newCheckoutList.splice(indexMatch, 1);
    setCheckoutList(newCheckoutList);
  };

  useEffect(() => {
    const localStorageProductList = getUserProductListToCheckout('cart');
    const validProducts = localStorageProductList.filter(
      (product) => product.quantity >= 1,
    );
    setCheckoutList(validProducts);
  }, []);

  useEffect(() => {
    (async () => {
      if (checkoutList) {
        const price = checkoutList.reduce(
          (previousValue, currentElement) => previousValue + (
            currentElement.price * currentElement.quantity
          ),
          0,
        );
        setTotalPrice(price);
        saveUserProductListToCheckout('checkoutCart', checkoutList);
      }
    })();
  }, [checkoutList, setCheckoutList]);

  return totalPrice && (
    <CheckoutContainer>
      <h1 className="checkout-screen">Finalizar Pedido</h1>
      <spam className="main-container">
        <div className="head-container">
          <p className="item">Item</p>
          <p className="description">Descrição</p>
          <p className="quantity">Quantidade</p>
          <p className="price-table">Preço unitário</p>
          <p className="subtotal">Subtotal</p>
          <p className="remove-item">Remover Item</p>
        </div>
        { checkoutList && checkoutList.map((product, index) => (
          <div className="info-products" key={ product.id }>
            <p
              className="item-list"
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              {`${index + 1}`}
            </p>

            <p
              className="description-name"
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              {product.name}
            </p>

            <p
              className="quantity-list"
              data-testid={
                `customer_checkout__element-order-table-quantity-${index}`
              }
            >
              {product.quantity}
            </p>
            <p
              className="price-list"
              data-testid={
                `customer_checkout__element-order-table-unit-price-${index}`
              }
            >
              {product.price.replace('.', ',')}
            </p>
            <p
              className="subtotal subtotal-table"
              data-testid={
                `customer_checkout__element-order-table-sub-total-${index}`
              }
            >
              {parseFloat(product.price * product.quantity)
                .toFixed(2).replace('.', ',')}
            </p>

            <button
              className="remove-item-buttom"
              data-testid={
                `customer_checkout__element-order-table-remove-${index}`
              }
              type="button"
              onClick={ () => removeItem(product) }
            >
              Remover
            </button>
          </div>
        ))}
      </spam>
      <ProductsTotal totalPrice={ totalPrice } />
    </CheckoutContainer>
  );
}
