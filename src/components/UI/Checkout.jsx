import { useContext } from 'react';
import Modal from './Modal';
import UserProgressContext from '../../store/UserProgressContext';
import Button from './Button';
import Input from './Input';
import CartContext from '../../store/CartContext';
import { currencyFormatter } from '../../util';

const Checkout = () => {
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotalCtx = useContext(CartContext);

  const cartTotal = cartTotalCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  const handleCloseCheckout = () => {
    userProgressCtx.hideCheckout();
  };

  console.log(userProgressCtx);

  return (
    <Modal open={userProgressCtx.progress === 'checkout'}>
      <h2>Checkout</h2>
      <form>
        <Input label={'Your full name'} type={'text'} id="full-name" />
        <Input label={'Your e-mail address'} type={'email'} id="email" />
        <Input label={'Your address'} type={'address'} id="adress" />
      </form>
      <p className="cart-total">
        Total price: {currencyFormatter.format(cartTotal)}
      </p>

      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCheckout}>
          Close
        </Button>
        <Button type="button">Place your order</Button>
      </p>
    </Modal>
  );
};

export default Checkout;
