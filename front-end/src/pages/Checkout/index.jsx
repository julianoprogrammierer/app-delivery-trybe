import React from 'react';
import Header from '../../components/Header';
import CheckoutProducts from '../../components/CheckoutProducts';

export default function Checkout() {
  return (
    <div>
      <Header />

      <div>
        <CheckoutProducts />
      </div>
    </div>
  );
}
