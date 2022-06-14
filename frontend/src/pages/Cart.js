import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Anouncement from '../components/Anouncement'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import {mobile} from '../Responsive'

function Cart() {
	
	const Wrapper = styled.div`
	padding: 20px;
	`
	const Title = styled.h2`
	text-align: center;
	font-weight: 300;
	`
	const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	`
		
	const TopTexts = styled.div`
	${mobile({display: 'none'})}
	`
	const TopText = styled.span`
	text-decoration: underline;
	margin: 10px;
	`
	const TopBtn = styled.button`
	font-weight: 600;
	padding: 10px;
	cursor: pointer;
	border: ${props => props.type === 'filled' && 'none'};
	background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
	color: ${props => props.type === 'filled' && 'white'};
	`
	const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({flexDirection: 'column'})}
	`
	const Info = styled.div`
	flex: 3;
	
	`
	
	const Product = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({flexDirection: 'column'})}
	`
	const Details = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	justify-content: space-around;
	`
	const Image = styled.img`
	width: 200px;
	`
	const ProductDe = styled.div`
	flex: 2;
	display: flex;
	
	`
	const ProductName = styled.span``
	const ProductId = styled.span``
	const PriceDe = styled.span`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	`
	const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: ${props => props.color};
	`
	const ProductSize = styled.span``
	const Summary = styled.div`
	flex: 1;
	padding: 20px;
	height: 50vh;
	border-radius: 10px;
	border: 0.5px solid lightgrey;
	`
	
	const ProductAmountContainer = styled.div`
display: flex;
font-weight: 700;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount = styled.span`
display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
border-radius: 10px;
margin:  0 5px;
border: 1px solid teal;
`
const ProductPrice = styled.div``
const Hr = styled.hr``
const SummaryTitle = styled.h2`
font-weight: 300;
`
const SummaryItem = styled.div`
display: flex;
justify-content: space-between;
margin: 30px 0;
font-weight: ${props => props.type === 'total' && '500'};
font-size: ${props => props.type === 'total' && '24px'}
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
padding: 10px;
width: 100%;
background: black;
color: white;
font-weight: 500;
`	
	
  return (
    <>
    <Anouncement />
    <Navbar />
    <Wrapper>
     <Title>Your Bag</Title>
     <Top>
     <TopBtn>Continue shooping</TopBtn>
      <TopTexts>
        <TopText>Shooping Bag(2)</TopText>
        <TopText>Your wishlist</TopText>
      </TopTexts>
      <TopBtn type='filled'>Checkout now</TopBtn>
     </Top>
     <Bottom>
       <Info>
       <Product>
        <ProductDe>
         <Image src='/images/gallery1.jpg' alt='cover' />
         <Details>
          <ProductName><b>Product:</b>Nike rain bout</ProductName>
          <ProductId><b>Id: 500029</b></ProductId>
          <ProductColor color='black' />
          <ProductSize><b>Size:</b>32.0</ProductSize>
         </Details>
        </ProductDe>
        <PriceDe>
          <ProductAmountContainer>
        <i className='fa-solid fa-minus'></i>
        <ProductAmount>2</ProductAmount>
        <i className='fa-solid fa-plus'></i>
       </ProductAmountContainer>
       <ProductPrice>$50</ProductPrice>
        </PriceDe>
       </Product>
       <Hr />
       <Product>
        <ProductDe>
         <Image src='/images/gallery1.jpg' alt='cover' />
         <Details>
          <ProductName><b>Product:</b>Nike rain bout</ProductName>
          <ProductId><b>Id: 500029</b></ProductId>
          <ProductColor color='black' />
          <ProductSize><b>Size:</b>32.0</ProductSize>
         </Details>
        </ProductDe>
        <PriceDe>
          <ProductAmountContainer>
        <i className='fa-solid fa-minus'></i>
        <ProductAmount>2</ProductAmount>
        <i className='fa-solid fa-plus'></i>
       </ProductAmountContainer>
       <ProductPrice>$50</ProductPrice>
        </PriceDe>
       </Product>
       </Info>
       <Summary>
        <SummaryTitle>OrderSummary</SummaryTitle>
        <SummaryItem>
         <SummaryItemText>subtotal</SummaryItemText>
         <SummaryItemPrice>$50</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
         <SummaryItemText>Estimated Shipping</SummaryItemText>
         <SummaryItemPrice>$3.2</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
         <SummaryItemText>Shipping Discount</SummaryItemText>
         <SummaryItemPrice>$ -5.4</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem type='total'>
         <SummaryItemText>Total</SummaryItemText>
         <SummaryItemPrice>$50</SummaryItemPrice>
        </SummaryItem>
        <Button>Checkout Now</Button>
       </Summary>
     </Bottom>
    </Wrapper>
    <NewsLetter />
    <Footer />
  </>    
  );
}

export default Cart;