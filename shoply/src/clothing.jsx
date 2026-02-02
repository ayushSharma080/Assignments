import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";

const categoryMap = {
  electronics: "electronics",
  "mens-clothing": "men's clothing",
};

const FeaturedProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiCategory = categoryMap[category];
    if (!apiCategory) return;

    axios
      .get(
        `https://fakestoreapi.com/products/category/${encodeURIComponent(
          apiCategory
        )}`
      )
      .then((res) => setProducts(res.data))
      .catch(console.log);
  }, [category]);

  return (
    <div className="item-container">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <NavLink to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
