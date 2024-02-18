import { currencyFormatter } from '../util.js';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';
import { useContext } from 'react';

const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  const handleAddItem = () => {
    cartCtx.addItem(meal);
  };
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`}></img>
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
          <Button onClick={handleAddItem} className="meal-item-actions">
            Add to cart
          </Button>
        </div>
      </article>
    </li>
  );
};

export default MealItem;
