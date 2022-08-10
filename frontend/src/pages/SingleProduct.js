import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Anouncement from "../components/Anouncement";
//import Product from "../components/Product";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { mobile } from "../Responsive";
import { useParams } from "react-router-dom";
import axios from "axios";
//import { publicRequest } from "../requestMothod";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const getProduct = async () => {
    try {
      //const res  = publicRequest.get('product/find' + id)
      const res = await axios.get(
        `http://localhost:8080/api/products/find/${id}`
      );
      setProduct(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, [id]);

  //css section
  const Wrapper = styled.div`
    display: flex;
    /*justify-content: center;
	align-items: center;*/
    ${mobile({ flexDirection: "column" })}

    .imgcontainer {
      flex: 1;
      margin: 20px;
      text-align: center;
    }
    .infocontainer {
      flex: 1;
      padding: 0 50px;
      margin-top: 20px;
      ${mobile({ padding: "0 10px" })}
    }
    img {
      width: 100%;
      object-fit: cover;
      ${mobile({ width: "75%", height: "40vh" })}
    }
    h2 {
    }
    p {
      margin: 20px 0;
      font-weight: 200;
    }

    .price {
      font-weight: 200;
      font-size: 50px;
    }
    .filteredContainer {
      width: 80%;
      margin: 20px 0;
      display: flex;
      justify-content: space-between;
      ${mobile({ width: "100%" })}
    }
    .filter {
      display: flex;
      align-items: center;
    }
    .filtertext {
      font-size: 30px;
      font-weight: 300;
      ${mobile({ fontSize: "20px" })}
    }

    select {
      margin: 5px;
      padding: 5px;
    }
    .addcontainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 60%;
      margin-bottom: 10px;
    }
    .amountcontainer {
      display: flex;
    }
    .amount {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border-radius: 10px;
      margin: 0 5px;
      border: 1px solid teal;
    }
    button {
      padding: 10px;
      background: white;
      border: 1px solid teal;
      cursor: pointer;
    }
    button:hover {
      background: #d6b8b8;
    }
    //
  `;
  const Color = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0 5px;
    cursor: pointer;
  `;

  return (
    <>
      <Navbar />
      <Anouncement />
      <Wrapper>
        <div className="imgcontainer">
          <img src={product.img} alt="product cover" />
        </div>
        <div className="infocontainer">
          <h2>{product.title}</h2>
          <p>{product.desc}</p>
          <span className="price">${product.price}</span>
          <div className="filteredContainer">
            <div className="filter">
              <span className="filtertext">Color</span>
              {/* {product.color.map((c, i) => (
                <Color color={c} key={c} />
              ))} */}
            </div>
            <div className="filter">
              <span className="filtertext">Size</span>
              <select>
                {product.size.map((c, i) => (
                  <option>{c}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="addcontainer">
            <div className="amountcontainer">
              <i className="fa-solid fa-minus"></i>
              <span className="amount">{quantity}</span>
              <i className="fa-solid fa-plus"></i>
            </div>
            <button>Add to Cart</button>
          </div>
        </div>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default SingleProduct;
