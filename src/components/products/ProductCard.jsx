import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { UseMenu } from '../../context/menuContext';

// eslint-disable-next-line react/prop-types
export function ProductCard({ product }) {
  const { menu } = UseMenu();
  const productUsed = product;
  productUsed.propTypes = {
    product: PropTypes.object.isRequired,
  };
  return (
    <>
    <Link to={`/products/${productUsed._id}`} >
      <div className="card">
                <div className="imgBox">
                    <img src={productUsed.image} alt="juguete gusano" className="gusano"/>
                </div>
                <div className="contentBox">
                    <h3>{productUsed.name}</h3>
                    <h2 className="price">$<small>{productUsed.price}.</small>00</h2>
                    <span className="buy">Ver más</span>
                </div>
            </div>
    </Link>
    </>
  );
}

export default ProductCard;