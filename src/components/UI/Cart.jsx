import Modal from './Modal.jsx';
import CartContext from '../../store/CartContext';
import { useContext } from 'react';
import { currencyFormatter } from '../../util';
import Button from './Button';
import UserProgressContext from '../../store/UserProgressContext.jsx';
import CartItem from './CartItem.jsx';

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  const handleCloseCart = () => {
    userProgressCtx.hideCart();
  };

  return (
    <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button onClick={handleCloseCart} textOnly>
          Close
        </Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
