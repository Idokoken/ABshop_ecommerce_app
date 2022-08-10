import React, { useState } from "react";
import styled from "styled-components";
import { slideData } from "./data";
import { mobile } from "../Responsive";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    //justify-content: center;
    //padding: 20px;
    overflow: hidden;
    ${mobile({ display: "none" })}
  `;
  const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
  `;
  const Slide = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.bg};
  `;
  const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
  `;
  const Image = styled.img`
    height: 80%;
    width: 100%;
    object-fit: cover;
  `;
  const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
  `;
  const Title = styled.h1`
    font-size: 70px;
  `;
  const Desc = styled.p`
    font-size: 20px;
    margin: 50px 0;
    line-height: 3px;
  `;

  const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
    background-color: transparent;
    border-radius: 10px;
  `;

  const Arrow = styled.div`
    height: 50px;
    width: 50px;
    background: #624181;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    margin: auto;
  `;

  // handle functions
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + -1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <i className="fa-solid fa-circle-arrow-left"></i>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideData.map((item, i) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} alt="cover pic"></Image>
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <i className="fa-solid fa-circle-arrow-right"></i>
      </Arrow>
    </Container>
  );
}

export default Slider;
