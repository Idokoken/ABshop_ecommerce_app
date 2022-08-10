import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
//import {Badge} from '@material-ui/core'
//import {ShoppingCartOutlined} from '@material-ui/icons'
//import Badge from '@mui/material/Badge';

function Navbar() {
  const Container = styled.div`
    // background: pink;
    ${mobile({ backgroundColor: "red" })};
  `;
  const Wrapper = styled.header`
    nav {
      height: 60px;
      // background: #A5991E;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 20px;
    }
    .left {
      flex: 1;
      margin-left: 10px;
      display: flex;
      align-items: center;
      ${mobile({ marginLeft: "0" })};
    }
    .center {
      flex: 1;
    }
    .right {
      flex: 2;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      ${mobile({ justifyContent: "center" })};
    }
    .left span {
      font-size: 14px;
      cursor: pointer;
      ${mobile({ display: "none" })};
    }
    .searchContainer {
      border: 1px solid lightgrey;
      padding: 5px;
      margin-left: 15px;
      ${mobile({ marginLeft: "0" })};
    }
    input {
      border: none;
      ${mobile({ width: "50px" })};
    }
    button {
      border: none;
    }
    h1 {
      font-weight: bold;
      text-align: center;
      font-size: 25px;
    }
    .menuItem {
      font-size: 14px;
      cursor: pointer;
      margin-right: 10px;
      ${mobile({ fontSize: "12px" })};
    }
  `;

  return (
    <Container>
      <Wrapper>
        <nav>
          <div className="left">
            <span>EN</span>
            <div className="searchContainer">
              <input placeholder="search" />
              <button>
                <span className="fa fa-search"></span>
              </button>
            </div>
          </div>
          <div className="center">
            <h1>ABShop.com</h1>
          </div>
          <div className="right">
            <div className="menuItem">Register</div>
            <div className="menuItem">Sign In</div>
            <div className="menuItem">
              <i className="fa fa-cart-shopping"></i>
            </div>
          </div>
        </nav>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
