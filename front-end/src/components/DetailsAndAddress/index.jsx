import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import {
  getUserFromLocalStorage,
  getUserProductListToCheckout,
} from '../../Context/LocalStorage';
import API from '../../services/DELIVERY_API_Services';
import DetailsAndAdress from './detailsAndAdress.style';

export default function DetailsAndAddress() {
  const [user, setUser] = useState(undefined);
  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [idSelected, setIdSelected] = useState(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    if (getUserFromLocalStorage('user') && !user) {
      setUser(getUserFromLocalStorage('user'));
    }
  }, [user]);

  useEffect(() => {
    const updatedSellers = async () => {
      const sellersList = await API.usersAPI.listSellersApi();
      return setSellers(sellersList);
    };
    updatedSellers();
  }, []);

  const confirmSale = async () => {
    const checkoutList = getUserProductListToCheckout('checkoutCart');
    const totalPrice = checkoutList.reduce(
      (previousValue, currentElement) => previousValue + (
        currentElement.price * currentElement.quantity
      ),
      0,
    );

    const saleObj = {
      sellerId: idSelected,
      totalPrice,
      deliveryAddress: address,
      deliveryNumber: number,
    };
    const id = await API.salesAPI.confirmSaleApi(saleObj, checkoutList, user.token);

    return navigate(`/customer/orders/${id}`);
  };

  return (
    <DetailsAndAdress>
      <h2 className="title"> Detalhes e Endereço de Entrega </h2>
      <div className="shipped-box">

        <label htmlFor="seller">
          P. Vendedora Responsável:
          <select
            id="seller"
            data-testid="customer_checkout__select-seller"
            onChange={ (event) => setIdSelected(event.target.value) }
          >
            <option value="">Selecione um vendedor</option>
            { sellers.length && sellers.map((seller) => (
              <option
                key={ seller.id }
                value={ seller.id }
                label={ seller.name }
              >
                { `${seller.name}` }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="address">
          Endereço:
          <input
            className="input-adress"
            type="text"
            id="address"
            data-testid="customer_checkout__input-address"
            value={ address }
            onChange={ (event) => setAddress(event.target.value) }
          />
        </label>
        <label
          className="label-number"
          htmlFor="number"
        >
          Número:
          <input
            className="input-number"
            type="text"
            id="number"
            data-testid="customer_checkout__input-address-number"
            value={ number }
            onChange={ (event) => setNumber(event.target.value) }
          />
        </label>
      </div>
      <div className="main-button">

        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
          disabled={ !idSelected }
          onClick={ confirmSale }
        >
          GRAVAR PEDIDO
        </button>
      </div>
    </DetailsAndAdress>
  );
}
