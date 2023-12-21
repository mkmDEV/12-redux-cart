import { useSelector } from 'react-redux';

import Card from '@components/UI/Card';
import CartItem from '@components/Cart/CartItem';

import classes from './Cart.module.css';
const Cart = () => {
  const items = useSelector(({ cart }) => cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              qty: item.qty,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
