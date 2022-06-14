import React from 'react'
import styled from 'styled-components'


function Products({item}) {
	
	const Info = styled.div`
	 display: flex;
	 position: absolute;
	 background: #BFB1B1;
	 background-color: rgba(0, 0, 0, 0.5);
	 opacity: 0;
	 z-index: 3;
	 width: 100%;
	 height: 100%;
	justify-content: center;
	align-items: center;
	pointer: cursor;
	`
	
	const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	background: #CEC2C2;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	
	&:hover ${Info} {
		opacity: 1;
	}
	`
	const Circle = styled.div`
	height: 200px;
	width: 200px;
	border-radius: 50%;
	position: absolute;
	background-color: white;
	`
	const Image = styled.img`
	width: 100%;
	object-fit: cover;
	height: 75%;
	z-index: 2;
	`
	
	const Icon = styled.div`
	margin: 7px;
	background-color: white;
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	transition: all 0.5s ease;
	&:hover{
		background: #BDCEC5;
		transform: scale(1.1);
	}
	`
 
  return (
    <>
   <Container>
   <Circle />
   <Image src={item.img} alt='product cover' />
   <Info>
     <Icon><i className='fa fa-cart-shooping'></i></Icon>
     <Icon><i className='fa fa-search'></i></Icon>
     <Icon><i className='fa fa-heart'></i></Icon>
   </Info>
  </Container>  
   </>
  );
}

export default Products;