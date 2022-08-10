import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Products({ item }) {
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    background: #cec2c2;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .info {
      display: flex;
      position: absolute;
      background: #bfb1b1;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      z-index: 3;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .info:hover {
      opacity: 1;
    }
    .circle {
      height: 200px;
      width: 200px;
      border-radius: 50%;
      position: absolute;
      background-color: white;
    }
    img {
      width: 100%;
      object-fit: cover;
      height: 75%;
      z-index: 2;
    }
    .icon {
      margin: 7px;
      background-color: white;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      transition: all 0.5s ease;
    }
    .icon:hover {
      background: #bdcec5;
      transform: scale(1.1);
    }
  `;

  return (
    <>
      <Container>
        <div className="circle"></div>
        <img src={item.img} alt={item.title} />
        <div className="info">
          <div className="icon">
            <i className="fa fa-cart-shooping"></i>
          </div>
          <Link to={`/product/${item._id}`}>
            <div className="icon">
              <i className="fa fa-search"></i>
            </div>
          </Link>

          <div className="icon">
            <i className="fa fa-heart"></i>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Products;
