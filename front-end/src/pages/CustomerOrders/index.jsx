import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserFromLocalStorage } from '../../Context/LocalStorage';
import API from '../../services/DELIVERY_API_Services';
import Header from '../../components/Header';
import CustomerDetailsContainer from '../CustomerDetails/styles';

export default function CustomerOrders() {
  const [sales, setSales] = useState([]);
  const { id } = getUserFromLocalStorage('user');

  useEffect(() => {
    const getSales = async (idToSearch) => {
      const salesByPersonId = await API.salesAPI.getAllSalesOfPerson(idToSearch);
      return setSales(salesByPersonId.data);
    };
    getSales(id);
  }, [id]);

  return (
    <CustomerDetailsContainer>
      <Header />
      <div className="sales-list-container">
        { sales && sales.map((sale) => (
          <Link
            to={ `/customer/orders/${sale.id}` }
            key={ sale.id }

          >
            <div className="sales-card-container">
              <p>
                PEDIDO
                <span data-testid={ `customer_orders__element-order-id-${sale.id}` }>
                  {`000${sale.id}`}
                </span>
              </p>
              <p
                data-testid={ `customer_orders__element-delivery-status-${sale.id}` }
              >
                {`${sale.status}`}
              </p>

              <p
                data-testid={ `customer_orders__element-order-date-${sale.id}` }
              >
                {`${new Date(sale.saleDate).toLocaleDateString('pt-BR')}`}
              </p>
              <p
                data-testid={ `customer_orders__element-card-price-${sale.id}` }
              >
                {`R$ ${sale.totalPrice.replace('.', ',')}`}
              </p>

            </div>
          </Link>
        ))}
      </div>
    </CustomerDetailsContainer>
  );
}
