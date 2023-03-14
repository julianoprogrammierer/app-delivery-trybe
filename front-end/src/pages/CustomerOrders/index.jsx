import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserFromLocalStorage } from '../../Context/LocalStorage';
import API from '../../services/DELIVERY_API_Services';
import Header from '../../components/Header';
import CustomerDetailsContainer from '../CustomerDetails/styles';
import OrderStatusCard from '../../components/OrderCard/OrderCard';

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
            <OrderStatusCard
              orderId={ sale.id }
              deliveryStatus={ sale.status }
              orderDate={ sale.saleDate }
              cardPrice={ sale.totalPrice }
            />
          </Link>
        ))}
      </div>
    </CustomerDetailsContainer>
  );
}
