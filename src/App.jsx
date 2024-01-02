import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData, sendCartData } from '@store/cart-actions';

import Layout from '@components/Layout/Layout';
import Cart from '@components/Cart/Cart';
import Products from '@components/Shop/Products';
import { Notification } from '@components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector(({ cart }) => cart);
  const showCart = useSelector(({ ui }) => ui.cartIsVisible);
  const notification = useSelector(({ ui }) => ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) isInitial = false;
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification {...notification} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
