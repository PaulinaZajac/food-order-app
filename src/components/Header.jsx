import Button from './UI/Button';
import CartContext from '../store/CartContext';
import { useContext } from 'react';
import UserProgressContext from '../store/UserProgressContext';

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalCartNumberItems, item) => {
    return totalCartNumberItems + item.quantity;
  }, 0);

  const handleShowCart = () => {
    userCtx.showCart();
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src="logo.jpg" alt="logo"></img>
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button
          onClick={handleShowCart}
          textOnly
        >{`Cart (${totalCartItems})`}</Button>
      </nav>
    </header>
  );
};

export default Header;
