import React from 'react'
import styled from 'styled-components'
//import {categories} from './data'
import {mobile} from '../Responsive'

function CategoryItem(props) {
	const {item} = props
  const Container = styled.div`
  	flex: 1;
  	margin: 3px;
  	height: 70vh;
  	position: relative;
	` 
	const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	`
	const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	${mobile({height: '30vh'})}
	`
	const Title = styled.h1`
	 color: white;
	 margin-bottom: 20px;
	`
	const Button = styled.button`
		border: none;
		padding: 10px;
		border-radius: 5px;
		background: white;
		color: black;
		font-wieght: 700;
	`
		
  return (
   <Container>
    <Image src={item.img} alt={item.title} />
    <Info>
     <Title>{item.title}</Title>
     <Button>Shop now</Button>
    </Info>	
   </Container>    
  );
}

export default CategoryItem;