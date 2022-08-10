import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Anouncement from "../components/Anouncement";
import Product from "../components/Product";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { mobile } from "../Responsive";
import { useParams } from "react-router-dom";

function ProductList() {
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState("newest");
  //const location = useLocation();
  //const cat = location.pathname.split("/")[2];
  const { cat } = useParams();

  //handle filter
  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filters, [name]: value });
  };

  //css section
  const Container = styled.div`
    display: flex;
    justify-content: space-between;

    h2 {
      margin: 20px;
    }
    .filter {
      margin: 20px;
    }
    .filtertext {
      font-weight: 600;
      font-size: 16px;
      margin-right: 20px;
    }
    select {
      margin: 10px 0;
      margin-right: 20px;
      width: 100px;
    }
    option {
      padding: 15px;
      font-weight: 600;
    }
  `;
  //

  return (
    <>
      <Navbar />
      <Anouncement />
      <h2>{cat ? cat : ""}</h2>
      <Container>
        <div className="filter">
          <span className="filtertext">Filter Products</span>
          <select name="color" onChange={handleFilter}>
            <option disabled>Color</option>
            <option>Green</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
          </select>
          <select name="size" onChange={handleFilter}>
            <option disabled>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filter">
          <span className="filtertext">Sort Products</span>
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="asc">Price(asc)</option>
            <option value="des">Price(dec)</option>
          </select>
        </div>
      </Container>
      <Product sort={sort} cat={cat} filters={filters} />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default ProductList;
