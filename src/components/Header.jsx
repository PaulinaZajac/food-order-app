import Button from './UI/Button';
import CartContext from '../store/CartContext';
import { useContext } from 'react';

const Header = () => {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalCartNumberItems, item) => {
    return totalCartNumberItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src="logo.jpg" alt="logo"></img>
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button textOnly>{`Cart (${totalCartItems})`}</Button>
      </nav>
    </header>
  );
};

export default Header;
