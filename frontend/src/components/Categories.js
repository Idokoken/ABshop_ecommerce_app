import React from 'react'
import styled from 'styled-components'
import {categories} from './data'
import CategoryItem from './CategoryItem'
import {mobile} from '../Responsive'

function Categories() {
	
	const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
	${mobile({flexDirection: 'column'})}
	`
	const Heading = styled.h2`
	 margin-top: 20px;
	 margin-left: 20px;
	`
  return (
    <>
    <Heading>Major Categories</Heading>	
   <Wrapper>
    {categories.map((item, i) => <CategoryItem key={i} item={item} />)}
  </Wrapper>    
   </>
  );
}

export default Categories;