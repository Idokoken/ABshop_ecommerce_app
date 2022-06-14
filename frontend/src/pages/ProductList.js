import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Anouncement from '../components/Anouncement'
import Product from '../components/Product'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import {mobile} from '../Responsive'

function ProductList() {
	
	
	const Title = styled.h2`
	 margin: 20px;
	`
	const FilterContainer = styled.div`
	 display: flex;
	justify-content: space-between;
	`
	const Filter = styled.div`
	 margin: 20px;
	 
	`
	const FilterText = styled.span`
	font-weight: 600;
	font-size: 16px;
	margin-right: 20px;
	`
	const Select = styled.select`
	margin: 10px 0;
	margin-right: 20px;
	width: 100px;
	
	`
	const Option = styled.option`
	padding: 15px;
	font-weight: 600;
	`
	
  return (
    <>
    <Navbar />
    <Anouncement />
    <Title>Dresses</Title>
     <FilterContainer>
     <Filter>
       <FilterText>Filter Products</FilterText>
       <Select>
        <Option disabled selected>Color</Option>
         <Option>Green</Option>
        <Option>White</Option>
        <Option>Black</Option>
        <Option>Red</Option>
        <Option>Blue</Option>
        <Option>Yellow</Option>
       </Select>
       <Select>
        <Option disabled selected>Size</Option>
         <Option>XS</Option>
        <Option>S</Option>
        <Option>M</Option>
        <Option>L</Option>
        <Option>XL</Option>
       </Select>
     </Filter>
     <Filter>
       <FilterText>Sort Products</FilterText>
       <Select>
        <Option selected>Newest</Option>
        <Option>Price(asc)</Option>
        <Option>Price(dec)</Option>
       </Select>
     </Filter>
    </FilterContainer>
    <Product />
    <NewsLetter />
    <Footer /> 
   </>
  );
}

export default ProductList;