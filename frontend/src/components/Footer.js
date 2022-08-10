import React from "react";
import styled from "styled-components";
//import Footers from './Footers'
import { mobile } from "../Responsive";

function Footer() {
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    ${mobile({ flexDirection: "column-reverse" })}

    .left {
      flex: 1;
    }
    .logo {
    }
    .desc {
      margin: 20px 0;
    }
    .socialContainer {
      display: flex;
    }

    .socialIcon {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      color: white;
      background-color: ${(props) => props.color};
      margin-right: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .center {
      flex: 1;
      padding: 20px;
    }
    .right {
      flex: 1;
      padding: 20px;
    }
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      /*flex-direction: column;
	justify-content: center;*/
      list-style-type: none;
    }
    li {
      width: 50%;
    }
    .contactitem {
      margin-bottom: 20px;
    }
    .payment {
      width: 50%;
    }

    //
  `;

  return (
    <Container>
      <div className="left">
        <h3 className="logo">ABShop</h3>
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus
          velit eget sapien condimentum
        </p>
        <div className="SocialContainer">
          <div className="SocialIcon" color="#130D81">
            <i className="fa-brands fa-facebook-square"></i>
          </div>
          <div className="SocialIcon" color="#8C2C2C">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="SocialIcon" color="#18A0D3">
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="SocialIcon" color="#F71E1E">
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
      <div className="center">
        <h3>Useful Link</h3>
        <ul>
          <li>Home</li>
          <li>Fashion</li>
          <li>Men fashion</li>#<li>Woman fashion</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Teams</li>
        </ul>
      </div>
      <div className="right">
        <h3>Contact</h3>
        <div className="contactitem">
          <i
            className="fa-solid fa-location-dot"
            style={{ marginRight: "10px" }}
          ></i>
          New District Wuse Zone 2, Abuja
        </div>
        <div className="contactitem">
          <i className="fa-solid fa-phone" style={{ marginRight: "10px" }}></i>{" "}
          +-234805500047
        </div>
        <div className="contactitem">
          <i
            className="fa-regular fa-envelope"
            style={{ marginRight: "10px" }}
          ></i>{" "}
          Info@ABShop.com
        </div>
        <img className="payment" src="/images/payment.jpeg" alt="payment" />
      </div>
    </Container>
  );
}

export default Footer;
