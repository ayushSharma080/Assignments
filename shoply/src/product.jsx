import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setData(res.data))
      .catch(console.log);
  }, [id]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="page2">
      <div className="left">
        <img src={data.image} alt={data.title} className="prod-image" />
      </div>

      <div className="right">
        <h1 className="title">{data.title}</h1>

        <p className="rating">
            {data.rating.rate} ({data.rating.count} ratings)
        </p>

        <p className="price">₹ {data.price}</p>

        <button className="cart-btn">Add to Cart</button>

        <div className="info">
          <h3>Category</h3>
          <p>{data.category}</p>

          <h3>Description</h3>
          <p>{data.description}</p>
        </div>

        <NavLink to="/home" className="back">
          ← Back to Products
        </NavLink>
      </div>
    </div>
  );
};

export default Product;
