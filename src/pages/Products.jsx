import title from "../components/ui/title";
import "../styles/products.css";
import { useProducts } from "../context/ProductsContext";
import { ImFileEmpty } from "react-icons/im";
import { ProductCard } from "../components/products/ProductCard";
import { useEffect } from "react";

export function Products() {
    title("Products");
    const {products, getProducts} = useProducts();
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <>
        {products.length === 0 && (
            <div className="flex justify-center items-center p-10">
              <div>
                <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
                <h1 className="font-bold text-xl">
                  No hay productos actualmente, por favor espere a que se agreguen nuevos productoss
                </h1>
              </div>
            </div>
          )}
        <div className="flex justify-center items-center p-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
            </div>
      </div>
        </>
    )
}

export default Products;