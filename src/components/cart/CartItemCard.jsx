import { useProducts } from "../../context/ProductsContext";
import PropTypes from 'prop-types';



// eslint-disable-next-line react/prop-types
export function CartItemCard({ cartItem }) {
  const {deleteCartItem} = useProducts();
  const itemUsed = cartItem;
  itemUsed.propTypes = {
    item: PropTypes.object.isRequired,
  };

  return (
    <tr>
        <td>
            <div className="cart__container__content__table__product">
                <span>{itemUsed.name}</span>
            </div>
        </td>
        <td>
            <div className="cart__container__content__table__quantity">
                <span>{itemUsed.quantity}</span>
            </div>
        </td>
        <td>
            <div className="cart__container__content__table__price">
                <span data-price >{(itemUsed.price * itemUsed.quantity )}</span>
            </div>
        </td>
        <td>
            <button onClick={() => deleteCartItem(itemUsed._id)} className="remove__button">
                Eliminar
            </button>
        </td>
    </tr>
);
}

export default CartItemCard;