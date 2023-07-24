import { Link } from 'react-router-dom';
import '../styles/cart.css'
import { ImFileEmpty } from "react-icons/im";
import CartItemCard from '../components/cart/CartItemCard.jsx';
import { useProducts } from "../context/ProductsContext";
import '../components/total'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export function Cart() {
    const {cartItems ,getCartItems, deleteCartItems} = useProducts();
    const navigate = useNavigate();
    useEffect(() => {
        getCartItems();
    }, []);
    return (
        <>
        <div className="cart__container " >
            <div className="cart__container__title">
                <h1 className="text-4xl font-bold mb-5 px-10 py-3 mt-10 inline-block ">Mi carrito</h1>
            </div>
            <div className="cart__container__content">
                <table className="cart__container__content__table">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cartItems.length === 0 && (
                        <div className="flex justify-center items-center p-10">
                            <div>
                                <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
                                <h1 className="font-bold text-xl">
                                    No hay productos en el carrito
                                </h1>
                                <Link to="/products" className="text-[#c01761]">Ir a productos</Link>
                            </div>
                        </div>
                    )}
                    {cartItems.map((cartItem) => (
                        <CartItemCard cartItem={cartItem} key={cartItem._id} />
                    ))}
                    </tbody>
                    <tfoot>
                        <tr className="total-row">
                            <td colSpan="1"></td>
                            <td>Total:</td>
                            <td data-total className="Total"></td>
                            <td>
                                <button onClick={() => {
                                    deleteCartItems();
                                    navigate("/");}} className="bg-[#c01761] text-white px-4 py-2 rounded-md my-2" >
                                    Hacer pedido
                                </button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
                </div>

        </div>
        </>
    )
}

export default Cart;