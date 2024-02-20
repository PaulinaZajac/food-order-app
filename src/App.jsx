import Header from './components/Header';
import MealsList from './components/MealsList';
import { CartContextProvider } from './store/CartContext';
import { UserProgressContextProvider } from './store/UserProgressContext';
import Cart from './components/UI/Cart';

function App() {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
        <Header />
        <MealsList />
        <Cart />
      </UserProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
