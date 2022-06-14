import React from 'react'
import styled from 'styled-components'
import {popularProduct} from './data'
import Products from './Products'

function Product() {
	
	const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 20px;
	`
	const Heading = styled.h2`
	 margin-top: 20px;
	 margin-left: 20px;
	`
  return (
    <>
    <Heading>Popular Products</Heading>
   <Wrapper>
    {popularProduct.map((item, i) => <Products key={i} item={item} />)}
   </Wrapper>    
   </>
  );
}

export default Product;