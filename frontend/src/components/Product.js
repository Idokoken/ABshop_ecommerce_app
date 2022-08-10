import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
//import { popularProduct } from "./data";
import Products from "./Products";

function Product({ sort, cat, filters }) {
  const [products, setProducts] = useState([]);
  const [filterProducts, setfilterProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        cat
          ? `http://localhost:8080/api/products?category=${cat}`
          : `http://localhost:8080/api/products`
      );
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setfilterProducts(
        products.filter((items) =>
          Object.entries(filters).every(([key, value]) =>
            items[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  console.log(filterProducts);

  useEffect(() => {
    if (sort === "newest") {
      setfilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setfilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setfilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  //css section
  const Container = styled.div`
    .wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 20px;
    }
    h2 {
      margin-top: 20px;
      margin-left: 20px;
    }
  `;

  return (
    <Container>
      <h2>Popular Products</h2>
      <div className="wrapper">
        {cat
          ? filterProducts.map((item, i) => <Products key={i} item={item} />)
          : products
              .slice(0, 8)
              .map((item, i) => <Products key={i} item={item} />)}
      </div>
    </Container>
  );
}

export default Product;
