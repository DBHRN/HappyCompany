import "../styles/product-info.css";
import producto from "./../assets/producto-gusano.png";
import {useForm} from 'react-hook-form';
import {useProducts} from '../context/ProductsContext';
import { useParams} from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";



export function ProductInfo() {
    const {register, handleSubmit, setValue, formState: {errors}} = useForm();
    const { isAuthenticated, user } = useAuth();
    const {getProduct, addToCart} = useProducts();
    const params = useParams();
    const userId = isAuthenticated ? user.id : "";
    const navigate = useNavigate();
    
    useEffect(() => {
      async function loadProduct() {
          if (params.id) {
              const product = await getProduct(params.id);
              setValue('name', product.name)
              setValue('price', product.price)
              setValue('product', product)
              console.log(userId);
              setValue('user', userId)
          }
      }
      loadProduct();
  },[]);
    

    function goBack() {
        window.history.back();
    }
    const onSubmit = handleSubmit(async(values) => {
      addToCart(values);
      navigate("/cart");
  });
    return (
        <section className="product-info-appear">
            <div className="product-info">
                <div className="car__info">
                    <div className="card__title">
                        <button onClick={goBack}>
                        <div className="icon">
                        <i className="fa fa-arrow-left"></i>
                    </div>
                    </button>
                        <h3>Regresar</h3>
                    </div>
                    <div className="card__body">
                      <div className="half">
                        <div className="featured_text">
                          <h1>GUS</h1>
                          <p className="sub">JUGUETE DIDÁCTICO</p>
                          <p className="price">$2299.00</p>
                        </div>
                        <div className="image">
                          <img src={producto} alt=""/>
                        </div>
                      </div>
                      <div className="half">
                        <div className="description">
                          <p>Juguete para aprendizaje infantil dirigido a niños invidentes de 4 años en adelante el cual consiste en un gusano con botones y braille para aprender los números del 1 al 5 y las vocales.</p>
                        </div>
                        <span className="stock"><i className="fa fa-pen"></i>Disponible</span>
                        <div className="reviews">
                          <ul className="stars">
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                          </ul>
                          <span>(0 reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="card__footer">
                      <div className="recommend">
                        <p>Aprendiendo jugando</p>
                      </div>
                      <div className="action">
                        <form onSubmit={onSubmit}>
                        <input hidden
                          {...register("name", {required: true})}/>
                          <input type="number" placeholder="Cantidad" 
                          {...register("quantity",{required: true})} className="mr-2" min="1" max="5" />
                          {errors.quantity && 
                          <p className="w-full px-4 py-2 border rounded-md my-2" > Quantity is required </p>}
                          <input hidden
                          {...register("price", {required: true})}/>
                          <input hidden
                          {...register("product", {required: true})}/>
                          <input hidden
                          {...register("user")}/>
                          <button type="submit">Agregar al carrito</button>
                        </form>
                      </div>
                    </div>
                  </div>
            </div>
        </section>
    )
}

export default ProductInfo;