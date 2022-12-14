import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../Context/APIProvider';
import { getUserFromLocalStorage } from '../../Context/LocalStorage';
import AdmHeaderContainer from './styles';

export default function Header() {
  const { userLog } = useContext(useAppContext);
  const [userInfo, setUserInfo] = useState(userLog);
  const navigate = useNavigate();

  useEffect(() => {
    if (getUserFromLocalStorage('user') && !userLog) {
      setUserInfo(getUserFromLocalStorage('user'));
    }
  }, [userLog]);

  const handleLogoutUser = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <AdmHeaderContainer>
      <div className="nav-left">
        <button
          data-testid="customer_products__element-navbar-link-products"
          className="nav-left-items produtos"
          type="button"
        >
          PRODUTOS
        </button>
      </div>

      <div className="nav-right">
        <p
          data-testid="customer_products__element-navbar-user-full-name"
          className="nav-right-items user"
        >
          { userInfo ? userInfo.name : 'nao atualizou' }
        </p>
        <button
          data-testid="customer_products__element-navbar-link-logout"
          className="nav-right-items sair"
          type="button"
          onClick={ handleLogoutUser }
        >
          SAIR
        </button>
      </div>
    </AdmHeaderContainer>
  );
}
