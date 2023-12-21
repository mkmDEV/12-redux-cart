import Card from '@components/UI/Card';
import CartItem from '@components/Cart/CartItem';

import classes from './Cart.module.css';
const Cart = () => {
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
