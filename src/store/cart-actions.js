import { uiActions } from '@store/ui-slice';
import { cartActions } from '@store/cart-slice';

const API = import.meta.env.VITE_API;
export const fetchCartData = () => async (dispatch) => {
  const fetchData = async () => {
    const response = await fetch(`${API}/cart.json`);

    if (!response.ok) throw new Error('Could not fetch cart data!');

    return await response.json();
  };

  try {
    const cartData = await fetchData();
    dispatch(
      cartActions.replaceCart({
        items: cartData.items ?? [],
        ...cartData,
      })
    );
  } catch (error) {
    dispatch(
      uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Fetching cart data failed',
      })
    );
  }
};
export const sendCartData = (cart) => async (dispatch) => {
  dispatch(
    uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!',
    })
  );

  const sendRequest = async () => {
    const response = await fetch(`${API}/cart.json`, {
      body: JSON.stringify({ items: cart.items, totalQty: cart.totalQty }),
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
    });

    if (!response.ok) throw new Error('Sending cart data failed');
  };

  try {
    await sendRequest();

    dispatch(
      uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully.',
      })
    );
  } catch (error) {
    dispatch(
      uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: error.message,
      })
    );
  }
};
